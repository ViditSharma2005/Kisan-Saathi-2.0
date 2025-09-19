// --- CHATBOT LOGIC ---

/**
 * Renders the initial HTML structure for the chatbot interface into the 'chatbot-content' div.
 * This function should be called once when the application initializes.
 */
const renderChatbot = () => {
    const chatbotContainer = document.getElementById('chatbot-content');
    if (chatbotContainer) {
        chatbotContainer.innerHTML = `
        <div class="rounded-lg border bg-white shadow-sm h-[70vh] flex flex-col">
            <div class="p-4 border-b">
                <h3 class="text-xl font-bold" data-key="chatbot_title">AI Farming Assistant</h3>
                <p class="text-sm text-gray-500" data-key="chatbot_subtitle">Ask me anything about farming</p>
            </div>
            <div id="chatbot-messages" class="flex-1 p-6 space-y-2 overflow-y-auto">
                <!-- Messages will be injected here by the chatbot logic -->
            </div>
            <div class="p-4 border-t bg-gray-50">
                <div id="chatbot-input-container" class="flex items-center gap-2">
                    <input type="text" id="chatbot-input" class="flex-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary" data-key-placeholder="chatbot_placeholder" disabled>
                    <button id="chatbot-send" class="gradient-primary text-white font-medium py-2 px-4 rounded-lg" disabled>Send</button>
                </div>
            </div>
        </div>
        `;
    }
};

/**
 * Initializes the chatbot functionality, event listeners, and API communication.
 * This should be called when the user clicks on the chatbot tab for the first time.
 * @param {string} GEMINI_API_KEY - The API key for the Google Gemini AI.
 * @param {object} translations - The translation object for the current language.
 */
const initializeChatbot = (GEMINI_API_KEY, translations) => {
    const messagesContainer = document.getElementById('chatbot-messages');
    const input = document.getElementById('chatbot-input');
    const sendButton = document.getElementById('chatbot-send');
    let chatHistory = [];

    // Helper function to add a message to the chat window
    const addMessage = (sender, message, isHtml = false) => {
        const messageWrapper = document.createElement('div');
        messageWrapper.classList.add('chat-message', `chat-message-${sender}`);

        const contentElement = document.createElement('div');
        contentElement.classList.add('chat-bubble');

        if (isHtml) {
            contentElement.innerHTML = message;
        } else {
            contentElement.textContent = message;
        }

        messageWrapper.appendChild(contentElement);
        messagesContainer.appendChild(messageWrapper);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        return messageWrapper;
    };

    // Renders the initial clickable topic options
    const renderChatOptions = () => {
        const options = [
            { key: 'weather', 'data-key': 'chatbot_option_weather' },
            { key: 'pest', 'data-key': 'chatbot_option_pest' },
            { key: 'crop', 'data-key': 'chatbot_option_crop' },
            { key: 'soil', 'data-key': 'chatbot_option_soil' },
            { key: 'market', 'data-key': 'chatbot_option_market' },
        ];
        const optionsHtml = `
            <div class="chat-options-container flex flex-wrap gap-2 justify-center">
                ${options.map(opt => `<button class="chat-option-btn" data-option="${opt.key}" data-key="${opt['data-key']}">${translations[opt['data-key']] || opt.key}</button>`).join('')}
            </div>
        `;
        const messageWrapper = addMessage('ai', optionsHtml, true);
        messageWrapper.querySelector('.chat-bubble').style.background = 'transparent';
    };

    // Displays the initial welcome message and options
    const displayWelcomeMessage = () => {
        const welcomeKey = 'chatbot_welcome_options';
        const welcomeText = translations[welcomeKey] || "Hello! How can I help you? Please select an option:";
        addMessage('ai', welcomeText);
        renderChatOptions();
    };

    // Handles the user clicking on one of the initial topic options
    const handleOptionClick = async (e) => {
        if (!e.target.classList.contains('chat-option-btn')) return;

        const optionKey = e.target.dataset.option;
        const optionText = e.target.textContent;

        const optionsContainer = document.querySelector('.chat-options-container');
        if (optionsContainer) {
            optionsContainer.parentElement.parentElement.remove();
        }

        addMessage('user', optionText);
        input.disabled = false;
        sendButton.disabled = false;
        input.focus();

        const typingIndicator = addMessage('ai', '<div class="typing-indicator"><span></span><span></span><span></span></div>', true);
        const responseKey = `chatbot_response_${optionKey}`;
        const responseText = translations[responseKey] || `You've selected ${optionText}. How can I help with that?`;

        setTimeout(() => {
            typingIndicator.remove();
            addMessage('ai', responseText);
            chatHistory.push({ role: "user", parts: [{text: optionText}] });
            chatHistory.push({ role: "model", parts: [{text: responseText}] });
        }, 1000);
    };

    // Handles sending a text message to the Gemini API
    const handleSend = async () => {
        const userMessage = input.value.trim();
        if (!userMessage) return;

        addMessage('user', userMessage);
        input.value = '';
        input.disabled = true;
        sendButton.disabled = true;

        const typingIndicator = addMessage('ai', '<div class="typing-indicator"><span></span><span></span><span></span></div>', true);

        if (!GEMINI_API_KEY) {
            const errorKey = 'chatbot_error_apikey';
            const errorText = translations[errorKey] || "AI Chatbot is unavailable. Please configure the API Key.";
            typingIndicator.querySelector('.chat-bubble').innerHTML = errorText;
            return;
        }

        try {
            const systemInstruction = `You are "Kisan Saathi," an expert AI agricultural advisor for Indian farmers. Provide concise, helpful, and easy-to-understand advice.`;
            
            chatHistory.push({ role: "user", parts: [{ text: userMessage }] });

            const geminiApiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`;
            const requestBody = {
                contents: chatHistory,
                systemInstruction: { parts: [{ text: systemInstruction }] }
            };

            const response = await fetch(geminiApiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(requestBody) });

            if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
            
            const data = await response.json();
            const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;

            typingIndicator.remove();

            if (aiResponse) {
                addMessage('ai', aiResponse);
                chatHistory.push({ role: "model", parts: [{ text: aiResponse }] });
            } else {
                addMessage('ai', 'Sorry, I could not process your request.');
            }

        } catch (error) {
            typingIndicator.remove();
            addMessage('ai', `An error occurred: ${error.message}`);
            console.error("Chatbot error:", error);
        } finally {
            input.disabled = false;
            sendButton.disabled = false;
            input.focus();
        }
    };

    // Event Listeners
    messagesContainer.addEventListener('click', handleOptionClick);
    sendButton.addEventListener('click', handleSend);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSend();
    });

    // Start the conversation
    displayWelcomeMessage();
};
