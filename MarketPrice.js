/**
 * Get enhanced vegetable info with more details
 */
function getVegetableInfo(commodity) {
    const commodityLower = commodity.toLowerCase();
    
    const cropData = {
        // Vegetables
        'onion': { emoji: '🧅', category: 'Vegetables', color: 'orange' },
        'potato': { emoji: '🥔', category: 'Vegetables', color: 'yellow' },
        'tomato': { emoji: '🍅', category: 'Vegetables', color: 'red' },
        'cabbage': { emoji: '🥬', category: 'Vegetables', color: 'green' },
        'cauliflower': { emoji: '🥦', category: 'Vegetables', color: 'green' },
        'carrot': { emoji: '🥕', category: 'Vegetables', color: 'orange' },
        'brinjal': { emoji: '🍆', category: 'Vegetables', color: 'purple' },
        'eggplant': { emoji: '🍆', category: 'Vegetables', color: 'purple' },
        'cucumber': { emoji: '🥒', category: 'Vegetables', color: 'green' },
        'okra': { emoji: '🌿', category: 'Vegetables', color: 'green' },
        'lady finger': { emoji: '🌿', category: 'Vegetables', color: 'green' },
        'spinach': { emoji: '🥬', category: 'Vegetables', color: 'green' },
        'methi': { emoji: '🥬', category: 'Vegetables', color: 'green' },
        'palak': { emoji: '🥬', category: 'Vegetables', color: 'green' },
        'capsicum': { emoji: '🫑', category: 'Vegetables', color: 'green' },
        'bell pepper': { emoji: '🫑', category: 'Vegetables', color: 'green' },
        'chilli': { emoji: '🌶️', category: 'Vegetables', color: 'red' },
        'green chilli': { emoji: '🌶️', category: 'Vegetables', color: 'green' },
        'garlic': { emoji: '🧄', category: 'Vegetables', color: 'gray' },
        'ginger': { emoji: '🧄', category: 'Vegetables', color: 'yellow' },
        'radish': { emoji: '🥕', category: 'Vegetables', color: 'orange' },
        'beetroot': { emoji: '🍠', category: 'Vegetables', color: 'red' },
        'turnip': { emoji: '🥕', category: 'Vegetables', color: 'orange' },
        'bottle gourd': { emoji: '🥒', category: 'Vegetables', color: 'green' },
        'ridge gourd': { emoji: '🥒', category: 'Vegetables', color: 'green' },
        'bitter gourd': { emoji: '🥒', category: 'Vegetables', color: 'green' },
        'pumpkin': { emoji: '🎃', category: 'Vegetables', color: 'orange' },
        'green peas': { emoji: '🫛', category: 'Vegetables', color: 'green' },
        'peas': { emoji: '🫛', category: 'Vegetables', color: 'green' },
        'french beans': { emoji: '🫘', category: 'Vegetables', color: 'green' },
        'broad beans': { emoji: '🫘', category: 'Vegetables', color: 'green' },
        'mushroom': { emoji: '🍄', category: 'Vegetables', color: 'brown' },
        'drumstick': { emoji: '🥒', category: 'Vegetables', color: 'green' },
        'cluster beans': { emoji: '🫘', category: 'Vegetables', color: 'green' },
        'ivy gourd': { emoji: '🥒', category: 'Vegetables', color: 'green' },
        'pointed gourd': { emoji: '🥒', category: 'Vegetables', color: 'green' },
        'snake gourd': { emoji: '🥒', category: 'Vegetables', color: 'green' },
        'ash gourd': { emoji: '🥒', category: 'Vegetables', color: 'green' },
        'colocasia': { emoji: '🥔', category: 'Vegetables', color: 'brown' },
        'sweet potato': { emoji: '🍠', category: 'Vegetables', color: 'orange' },
        'yam': { emoji: '🍠', category: 'Vegetables', color: 'brown' },
        
        // Fruits
        'mango': { emoji: '🥭', category: 'Fruits', color: 'yellow' },
        'banana': { emoji: '🍌', category: 'Fruits', color: 'yellow' },
        'apple': { emoji: '🍎', category: 'Fruits', color: 'red' },
        'orange': { emoji: '🍊', category: 'Fruits', color: 'orange' },
        'grapes': { emoji: '🍇', category: 'Fruits', color: 'purple' },
        'watermelon': { emoji: '🍉', category: 'Fruits', color: 'green' },
        'muskmelon': { emoji: '🍈', category: 'Fruits', color: 'orange' },
        'papaya': { emoji: '🫒', category: 'Fruits', color: 'orange' },
        'guava': { emoji: '🍃', category: 'Fruits', color: 'green' },
        'pomegranate': { emoji: '🍎', category: 'Fruits', color: 'red' },
        'custard apple': { emoji: '🍃', category: 'Fruits', color: 'green' },
        'sweet lime': { emoji: '🍋', category: 'Fruits', color: 'green' },
        'lime': { emoji: '🍋', category: 'Fruits', color: 'green' },
        'lemon': { emoji: '🍋', category: 'Fruits', color: 'yellow' },
        'pineapple': { emoji: '🍍', category: 'Fruits', color: 'yellow' },
        'coconut': { emoji: '🥥', category: 'Fruits', color: 'brown' },
        'jackfruit': { emoji: '🍈', category: 'Fruits', color: 'green' },
        'litchi': { emoji: '🍒', category: 'Fruits', color: 'red' },
        'strawberry': { emoji: '🍓', category: 'Fruits', color: 'red' },
        
        // Grains & Cereals
        'rice': { emoji: '🌾', category: 'Grains', color: 'yellow' },
        'wheat': { emoji: '🌾', category: 'Grains', color: 'yellow' },
        'maize': { emoji: '🌽', category: 'Grains', color: 'yellow' },
        'corn': { emoji: '🌽', category: 'Grains', color: 'yellow' },
        'bajra': { emoji: '🌾', category: 'Grains', color: 'brown' },
        'jowar': { emoji: '🌾', category: 'Grains', color: 'brown' },
        'barley': { emoji: '🌾', category: 'Grains', color: 'yellow' },
        'oats': { emoji: '🌾', category: 'Grains', color: 'brown' },
        
        // Pulses & Legumes
        'arhar': { emoji: '🫘', category: 'Pulses', color: 'yellow' },
        'tur': { emoji: '🫘', category: 'Pulses', color: 'yellow' },
        'moong': { emoji: '🫘', category: 'Pulses', color: 'green' },
        'urad': { emoji: '🫘', category: 'Pulses', color: 'gray' },
        'chana': { emoji: '🫘', category: 'Pulses', color: 'brown' },
        'gram': { emoji: '🫘', category: 'Pulses', color: 'brown' },
        'masoor': { emoji: '🫘', category: 'Pulses', color: 'red' },
        'lentil': { emoji: '🫘', category: 'Pulses', color: 'orange' },
        'black gram': { emoji: '🫘', category: 'Pulses', color: 'gray' },
        'green gram': { emoji: '🫘', category: 'Pulses', color: 'green' },
        'cowpea': { emoji: '🫘', category: 'Pulses', color: 'brown' },
        'field pea': { emoji: '🫘', category: 'Pulses', color: 'green' },
        
        // Spices
        'turmeric': { emoji: '🧂', category: 'Spices', color: 'yellow' },
        'coriander': { emoji: '🌿', category: 'Spices', color: 'green' },
        'cumin': { emoji: '🧂', category: 'Spices', color: 'brown' },
        'fenugreek': { emoji: '🌿', category: 'Spices', color: 'green' },
        'mustard': { emoji: '🧂', category: 'Spices', color: 'yellow' },
        'fennel': { emoji: '🧂', category: 'Spices', color: 'green' },
        'cardamom': { emoji: '🧂', category: 'Spices', color: 'green' },
        'black pepper': { emoji: '🧂', category: 'Spices', color: 'gray' },
        'red chilli': { emoji: '🌶️', category: 'Spices', color: 'red' },
        
        // Cash Crops
        'cotton': { emoji: '🌼', category: 'Cash Crops', color: 'white' },
        'sugarcane': { emoji: '🌾', category: 'Cash Crops', color: 'green' },
        'jute': { emoji: '🌾', category: 'Cash Crops', color: 'brown' },
        'tobacco': { emoji: '🌿', category: 'Cash Crops', color: 'brown' },
        'groundnut': { emoji: '🥜', category: 'Cash Crops', color: 'brown' },
        'sunflower': { emoji: '🌻', category: 'Cash Crops', color: 'yellow' },
        'sesame': { emoji: '🧂', category: 'Cash Crops', color: 'gray' },
        'castor': { emoji: '🌿', category: 'Cash Crops', color: 'green' },
        
        // Others
        'fodder': { emoji: '🌿', category: 'Fodder', color: 'green' },
        'grass': { emoji: '🌱', category: 'Fodder', color: 'green' },
        'hay': { emoji: '🌾', category: 'Fodder', color: 'yellow' }
    };
    
    // Find matching crop
    for (const [key, info] of Object.entries(cropData)) {
        if (commodityLower.includes(key) || key.includes(commodityLower)) {
            return info;
        }
    }
    
    // Default for unknown crops
    return { emoji: '🌱', category: 'Other Crops', color: 'gray' };
}

/**
 * Search for mandis manually based on user input
 */
async function searchMandisManually(searchTerm) {
    updateLoader('Searching Markets', `Looking for mandis matching "${searchTerm}"...`);
    
    try {
        // Fetch all available mandis
        const allMandis = await fetchAvailableMandis();
        showDebugInfo(`Searching ${allMandis.length} mandis for "${searchTerm}"`);
        
        // Smart search with scoring
        const matchingMandis = findMatchingMandis(allMandis, searchTerm);
        
        if (matchingMandis.length > 0) {
            // Create a mock location object for display
            const searchLocation = {
                city: searchTerm,
                district: searchTerm,
                state: searchTerm
            };
            
            populateMandiDropdown(matchingMandis, searchLocation);
            document.getElementById('mandi-selection').classList.remove('hidden');
            updateLoader('', '', false);
            
            // Update the location status to show search results
            const locationStatus = document.getElementById('location-status');
            locationStatus.textContent = `Found ${matchingMandis.length} mandis matching "${searchTerm}"`;
            locationStatus.classList.remove('hidden');
            
            showDebugInfo(`Found ${matchingMandis.length} matching mandis for manual search`);
        } else {
            updateLoader('', '', false);
            
            // Show suggestions for similar searches
            const suggestions = getSimilarSearchSuggestions(allMandis, searchTerm);
            const suggestionText = suggestions.length > 0 ? 
                `<p class="mt-2 text-sm">Try searching for: ${suggestions.join(', ')}</p>` : '';
            
            showError('No Matching Mandis Found', 
                `No mandis found matching "${searchTerm}". Try searching with:
                <ul class="mt-2 text-sm list-disc list-inside">
                    <li>Full district name (e.g., "North Delhi", "Pune")</li>
                    <li>State name (e.g., "Maharashtra", "Punjab")</li>
                    <li>Major market name (e.g., "Azadpur", "Vashi")</li>
                </ul>
                ${suggestionText}`
            );
        }
        
    } catch (error) {
        updateLoader('', '', false);
        showError('Search Error', 'Unable to search mandis. Please check your connection and try again.');
        console.error('Manual search error:', error);
    }
}

/**
 * Find mandis matching search term with intelligent scoring
 */
function findMatchingMandis(allMandis, searchTerm) {
    const term = searchTerm.toLowerCase().trim();
    const matches = [];
    
    allMandis.forEach(mandi => {
        let score = 0;
        const market = mandi.market.toLowerCase();
        const district = mandi.district.toLowerCase();
        const state = mandi.state.toLowerCase();
        
        // Exact matches get highest score
        if (market === term) score += 100;
        if (district === term) score += 90;
        if (state === term) score += 80;
        
        // Starts with match
        if (market.startsWith(term)) score += 70;
        if (district.startsWith(term)) score += 60;
        if (state.startsWith(term)) score += 50;
        
        // Contains match
        if (market.includes(term)) score += 40;
        if (district.includes(term)) score += 35;
        if (state.includes(term)) score += 30;
        
        // Word boundary matches (e.g., "delhi" matches "New Delhi")
        const termWords = term.split(' ');
        termWords.forEach(word => {
            if (word.length > 2) { // Skip very short words
                if (market.includes(word)) score += 20;
                if (district.includes(word)) score += 15;
                if (state.includes(word)) score += 10;
            }
        });
        
        // Regional matches
        const regionalMatches = getRegionalMatches(term);
        regionalMatches.forEach(match => {
            if (market.includes(match) || district.includes(match)) score += 25;
        });
        
        if (score > 0) {
            matches.push({ ...mandi, score });
        }
    });
    
    // Sort by score and return top matches
    return matches
        .sort((a, b) => b.score - a.score)
        .slice(0, 20); // Show top 20 matches
}

/**
 * Get similar search suggestions when no results found
 */
function getSimilarSearchSuggestions(allMandis, searchTerm) {
    const term = searchTerm.toLowerCase();
    const suggestions = new Set();
    
    // Find partial matches for suggestions
    allMandis.forEach(mandi => {
        const market = mandi.market.toLowerCase();
        const district = mandi.district.toLowerCase();
        const state = mandi.state.toLowerCase();
        
        // If any field contains part of the search term, suggest the full field
        if (market.includes(term.substring(0, 3)) && market !== term) {
            suggestions.add(mandi.market);
        }
        if (district.includes(term.substring(0, 3)) && district !== term) {
            suggestions.add(mandi.district);
        }
        if (state.includes(term.substring(0, 2)) && state !== term) {
            suggestions.add(mandi.state);
        }
    });
    
    return Array.from(suggestions).slice(0, 5);
}

/**
 * Renders the initial HTML structure for the Market Prices tab.
 */
function renderMarket() {
    const container = document.getElementById('market-content');
    if (!container) {
        console.error('Market content container not found!');
        return;
    }

    container.innerHTML = `
        <div class="rounded-lg border bg-white p-6 shadow-sm">
            <h3 class="text-xl font-bold mb-2" data-key="market_tab_title">Market Prices</h3>
            <p class="text-sm text-gray-500 mb-4" data-key="market_tab_subtitle">Live mandi rates and market trends</p>
            
            <!-- Manual Search Section -->
            <div id="manual-search" class="mb-4">
                <div class="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4 border">
                    <h4 class="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                        🔍 Search for Mandis
                    </h4>
                    <form id="city-form" class="flex gap-2 mb-3">
                        <input id="city-input" type="text" placeholder="Enter city, district or state name (e.g., Delhi, Punjab, Mumbai)" 
                               class="flex-1 border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required />
                        <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-md font-medium transition-all hover:bg-blue-700">
                            Search Mandis
                        </button>
                    </form>
                    <div class="text-center">
                        <span class="text-sm text-gray-500">OR</span>
                    </div>
                </div>
            </div>

            <!-- Location Detection Section -->
            <div class="mb-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border">
                <div class="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                    <button id="use-location-btn" class="bg-green-600 text-white px-4 py-2 rounded-md font-medium transition-all hover:bg-green-700 hover:shadow-md flex items-center gap-2">
                        <span id="location-icon">📍</span>
                        <span id="location-text">Auto-Detect My Location</span>
                    </button>
                    <div id="location-status" class="text-sm text-gray-600 hidden"></div>
                </div>
            </div>

            <!-- Available Mandis Dropdown Section -->
            <div id="mandi-selection" class="mb-4 hidden">
                <div class="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <h4 class="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                        🏪 Available Mandis
                    </h4>
                    <p class="text-sm text-blue-600 mb-3" id="location-info">Select a mandi to view prices</p>
                    <select id="mandi-dropdown" class="w-full p-3 border border-blue-300 rounded-md bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option value="">Select a mandi to view prices...</option>
                    </select>
                </div>
            </div>

            <div id="debug-info" class="mb-4 p-3 bg-blue-50 rounded-md text-sm text-blue-800 hidden">
                <strong>Debug Info:</strong> <span id="debug-text"></span>
            </div>

            <div id="market-prompt" class="result-card text-center text-gray-700">
                <div class="py-8">
                    <div class="text-6xl mb-4">🌾</div>
                    <h3 class="text-lg font-semibold mb-2">Ready to Show Market Prices</h3>
                    <p class="text-gray-500">Detect your location to find nearby mandis or search manually</p>
                </div>
            </div>

            <div id="market-loader" class="hidden text-center p-6 result-card">
                <div class="spinner mb-3"></div>
                <h3 class="font-semibold text-green-600" id="loader-title">Loading...</h3>
                <p class="text-sm text-gray-500" id="loader-message">Please wait a moment.</p>
            </div>

            <div id="market-error" class="hidden error-message"></div>
            
            <div id="market-data-view" class="hidden">
                <div class="mb-4 flex items-center justify-between">
                    <h4 class="text-lg font-semibold text-gray-800" id="data-title">Market Prices</h4>
                    <span class="text-sm text-gray-500" id="data-count"></span>
                </div>
                <div id="market-cards" class="flex flex-wrap gap-3">
                    <!-- Market data cards will be injected here in compact flex layout -->
                </div>
            </div>
        </div>`;
}

/**
 * Show debug information
 */
function showDebugInfo(message) {
    const debugDiv = document.getElementById('debug-info');
    const debugText = document.getElementById('debug-text');
    if (debugDiv && debugText) {
        debugText.textContent = message;
        debugDiv.classList.remove('hidden');
        console.log('DEBUG:', message);
    }
}

/**
 * Update loader message
 */
function updateLoader(title, message, show = true) {
    const loader = document.getElementById('market-loader');
    const titleEl = document.getElementById('loader-title');
    const messageEl = document.getElementById('loader-message');
    
    if (titleEl) titleEl.textContent = title;
    if (messageEl) messageEl.textContent = message;
    
    if (show) {
        loader.classList.remove('hidden');
        document.getElementById('market-prompt').classList.add('hidden');
        document.getElementById('market-error').classList.add('hidden');
    } else {
        loader.classList.add('hidden');
    }
}

/**
 * Get current date and recent dates for API calls (extended range for more vegetables)
 */
function getDateRange() {
    const today = new Date();
    const dates = [];
    
    // Check last 14 days to get more vegetable variety
    for (let i = 0; i < 14; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        dates.push(`${year}-${month}-${day}`);
    }
    
    return dates;
}

/**
 * Fetch all available mandis from the API (enhanced for more vegetables)
 */
async function fetchAvailableMandis() {
    const MARKET_API_KEY = "579b464db66ec23bdd000001ed70bca51f9b48ab51ebbadd2765d259";
    const dates = getDateRange();
    const allMandis = new Set();
    
    // Check more days to get better coverage of vegetables
    for (const date of dates.slice(0, 5)) { // Check last 5 days instead of 3
        try {
            const url = `https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=${MARKET_API_KEY}&format=json&limit=300&filters[arrival_date]=${date}`;
            const response = await fetch(url);
            
            if (response.ok) {
                const data = await response.json();
                if (data.records) {
                    data.records.forEach(record => {
                        if (record.market && record.district && record.state) {
                            const mandiInfo = {
                                market: record.market,
                                district: record.district,
                                state: record.state,
                                key: `${record.market}_${record.district}_${record.state}`.toLowerCase()
                            };
                            allMandis.add(JSON.stringify(mandiInfo));
                        }
                    });
                }
            }
        } catch (error) {
            console.error('Error fetching mandis for date:', date, error);
        }
    }
    
    return Array.from(allMandis).map(mandi => JSON.parse(mandi));
}

/**
 * Find mandis near user's location
 */
function findNearbyMandis(allMandis, userLocation) {
    const { city, district, state } = userLocation;
    const nearby = [];
    
    // Priority scoring system
    allMandis.forEach(mandi => {
        let score = 0;
        const mandiMarket = mandi.market.toLowerCase();
        const mandiDistrict = mandi.district.toLowerCase();
        const mandiState = mandi.state.toLowerCase();
        
        // Exact city match - highest priority
        if (city && mandiMarket.includes(city.toLowerCase())) score += 100;
        if (city && mandiDistrict.includes(city.toLowerCase())) score += 80;
        
        // District match - high priority
        if (district && mandiDistrict.includes(district.toLowerCase())) score += 60;
        if (district && mandiMarket.includes(district.toLowerCase())) score += 50;
        
        // State match - medium priority
        if (state && mandiState.includes(state.toLowerCase())) score += 30;
        
        // Regional matches for major cities
        const regionalMatches = getRegionalMatches(city || district || '');
        regionalMatches.forEach(match => {
            if (mandiMarket.includes(match) || mandiDistrict.includes(match)) score += 40;
        });
        
        if (score > 0) {
            nearby.push({ ...mandi, score });
        }
    });
    
    // Sort by score and return top matches
    return nearby.sort((a, b) => b.score - a.score).slice(0, 15);
}

/**
 * Get regional matches for better coverage
 */
function getRegionalMatches(location) {
    const loc = location.toLowerCase();
    const regions = {
        'delhi': ['gurgaon', 'noida', 'faridabad', 'ghaziabad', 'new delhi'],
        'mumbai': ['thane', 'pune', 'nashik', 'navi mumbai'],
        'bangalore': ['mysore', 'tumkur', 'bengaluru'],
        'chennai': ['kanchipuram', 'tiruvallur', 'coimbatore'],
        'hyderabad': ['rangareddy', 'medak', 'secunderabad'],
        'kolkata': ['howrah', 'north 24 parganas', 'south 24 parganas']
    };
    
    for (const [key, matches] of Object.entries(regions)) {
        if (loc.includes(key)) return matches;
        if (matches.some(match => loc.includes(match))) return [key, ...matches];
    }
    
    return [];
}

/**
 * Populate the mandis dropdown with intelligent labeling
 */
function populateMandiDropdown(nearbyMandis, userLocation) {
    const dropdown = document.getElementById('mandi-dropdown');
    const locationInfo = document.getElementById('location-info');
    
    if (!dropdown) return;
    
    dropdown.innerHTML = '<option value="">Select a mandi to view prices...</option>';
    
    if (nearbyMandis.length === 0) {
        dropdown.innerHTML = '<option value="">No mandis found. Try different search terms.</option>';
        locationInfo.textContent = 'No mandis found. Try searching for district or state names.';
        return;
    }
    
    // Group mandis by state for better organization
    const mandisByState = {};
    nearbyMandis.forEach(mandi => {
        if (!mandisByState[mandi.state]) {
            mandisByState[mandi.state] = [];
        }
        mandisByState[mandi.state].push(mandi);
    });
    
    // Add mandis to dropdown, grouped by state
    Object.entries(mandisByState).forEach(([state, mandis]) => {
        if (Object.keys(mandisByState).length > 1) {
            // Add state as optgroup if multiple states
            const optgroup = document.createElement('optgroup');
            optgroup.label = `${state} (${mandis.length} mandis)`;
            dropdown.appendChild(optgroup);
            
            mandis.forEach(mandi => {
                const option = document.createElement('option');
                option.value = JSON.stringify({
                    market: mandi.market,
                    district: mandi.district,
                    state: mandi.state
                });
                option.textContent = `${mandi.market}, ${mandi.district}`;
                optgroup.appendChild(option);
            });
        } else {
            // Single state, just add options directly
            mandis.forEach(mandi => {
                const option = document.createElement('option');
                option.value = JSON.stringify({
                    market: mandi.market,
                    district: mandi.district,
                    state: mandi.state
                });
                option.textContent = `${mandi.market}, ${mandi.district}, ${mandi.state}`;
                dropdown.appendChild(option);
            });
        }
    });
    
    // Update location info text
    const { city, district, state } = userLocation;
    const isLocationDetected = city || district || state;
    
    if (isLocationDetected) {
        const locationStr = [city, district, state].filter(Boolean).join(', ');
        locationInfo.textContent = `Found ${nearbyMandis.length} mandis near ${locationStr}`;
    } else {
        locationInfo.textContent = `Found ${nearbyMandis.length} matching mandis`;
    }
}

/**
 * Fetch and display market data for selected mandi (enhanced for maximum crops)
 */
async function fetchMarketDataForMandi(mandiInfo) {
    const MARKET_API_KEY = "579b464db66ec23bdd000001ed70bca51f9b48ab51ebbadd2765d259";
    const dates = getDateRange();
    const allRecords = [];
    
    updateLoader('Fetching Market Prices', `Scanning ${mandiInfo.market} for all available crops...`);
    
    // Collect data from more dates and higher limits for maximum crops
    for (const date of dates.slice(0, 10)) { // Check last 10 days
        try {
            // Increased limit to get more records
            const url = `https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=${MARKET_API_KEY}&format=json&limit=500&filters[arrival_date]=${date}`;
            const response = await fetch(url);
            
            if (response.ok) {
                const data = await response.json();
                if (data.records && data.records.length > 0) {
                    // Filter for the selected mandi
                    const filteredRecords = data.records.filter(record => 
                        record.market === mandiInfo.market &&
                        record.district === mandiInfo.district &&
                        record.state === mandiInfo.state
                    );
                    
                    // Also include nearby mandis in same district if main mandi has few records
                    if (filteredRecords.length < 10) {
                        const nearbyRecords = data.records.filter(record => 
                            record.district === mandiInfo.district &&
                            record.state === mandiInfo.state &&
                            record.market !== mandiInfo.market
                        );
                        filteredRecords.push(...nearbyRecords.slice(0, 20));
                    }
                    
                    // Add date and source info to each record
                    filteredRecords.forEach(record => {
                        record.fetch_date = date;
                        record.is_main_mandi = record.market === mandiInfo.market;
                        allRecords.push(record);
                    });
                    
                    showDebugInfo(`Found ${filteredRecords.length} records for ${date}`);
                }
            }
        } catch (error) {
            console.error('Error fetching market data for date:', date, error);
        }
    }
    
    if (allRecords.length > 0) {
        displayCompactMarketData(allRecords, mandiInfo);
        updateLoader('', '', false);
        showDebugInfo(`Total: ${allRecords.length} records from ${dates.slice(0, 10).length} days`);
    } else {
        // Try getting any records from the district as fallback
        await fetchDistrictFallbackData(mandiInfo);
    }
}

/**
 * Fallback to get district-wide data if specific mandi has no data
 */
async function fetchDistrictFallbackData(mandiInfo) {
    const MARKET_API_KEY = "579b464db66ec23bdd000001ed70bca51f9b48ab51ebbadd2765d259";
    const dates = getDateRange();
    const allRecords = [];
    
    updateLoader('Expanding Search', `Looking for crops in ${mandiInfo.district} district...`);
    
    for (const date of dates.slice(0, 5)) {
        try {
            const url = `https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=${MARKET_API_KEY}&format=json&limit=500&filters[arrival_date]=${date}`;
            const response = await fetch(url);
            
            if (response.ok) {
                const data = await response.json();
                if (data.records) {
                    const districtRecords = data.records.filter(record => 
                        record.district === mandiInfo.district &&
                        record.state === mandiInfo.state
                    );
                    
                    districtRecords.forEach(record => {
                        record.fetch_date = date;
                        record.is_main_mandi = false;
                        allRecords.push(record);
                    });
                }
            }
        } catch (error) {
            console.error('Error in district fallback:', error);
        }
    }
    
    if (allRecords.length > 0) {
        displayCompactMarketData(allRecords, mandiInfo, true);
        updateLoader('', '', false);
    } else {
        updateLoader('', '', false);
        showError('No Data Available', `No market data found for ${mandiInfo.market} or ${mandiInfo.district} district. Please try another location.`);
    }
}

/**
 * Display market data in compact flex-wrap cards
 */
function displayCompactMarketData(records, mandiInfo, isDistrictFallback = false) {
    const dataView = document.getElementById('market-data-view');
    const dataTitle = document.getElementById('data-title');
    const dataCount = document.getElementById('data-count');
    const marketCards = document.getElementById('market-cards');
    
    if (!dataView || !marketCards) return;
    
    // Process and deduplicate records
    const commodityMap = new Map();
    
    records.forEach(record => {
        const key = `${record.commodity}_${record.variety || 'General'}_${record.market}`;
        
        // Keep the most recent record for each commodity-variety-market combination
        if (!commodityMap.has(key) || record.fetch_date > commodityMap.get(key).fetch_date) {
            commodityMap.set(key, {
                ...record,
                vegInfo: getVegetableInfo(record.commodity || 'Unknown')
            });
        }
    });
    
    const uniqueRecords = Array.from(commodityMap.values());
    
    // Update header
    const totalCommodities = uniqueRecords.length;
    const title = isDistrictFallback ? 
        `${mandiInfo.district} District - Market Prices` : 
        `${mandiInfo.market} - Market Prices`;
    
    if (dataTitle) dataTitle.textContent = title;
    if (dataCount) dataCount.textContent = `${totalCommodities} crops available${isDistrictFallback ? ' (district-wide)' : ''}`;
    
    // Change the grid to flex-wrap for compact cards
    marketCards.className = 'flex flex-wrap gap-3';
    
    // Generate compact cards
    const cardsHTML = uniqueRecords.map(record => {
        const price = record.modal_price || record.min_price || record.max_price || 'N/A';
        const variety = record.variety || 'General';
        const commodity = record.commodity || 'Unknown';
        const minPrice = record.min_price;
        const maxPrice = record.max_price;
        const vegInfo = record.vegInfo;
        
        // Additional details from API
        const grade = record.grade || '';
        const quality = record.quality || '';
        const unitName = record.unit_name || 'Quintal';
        
        // Price trend mock
        const trend = Math.random() > 0.5 ? 'up' : 'down';
        const trendIcon = trend === 'up' ? '📈' : '📉';
        const trendColor = trend === 'up' ? 'text-red-500' : 'text-green-500';
        
        return `
            <div class="w-48 p-3 border rounded-lg shadow-sm hover:shadow-md transition-all bg-white hover:bg-gray-50 flex-shrink-0">
                <!-- Header with emoji and trend -->
                <div class="flex justify-between items-start mb-2">
                    <div class="flex items-center gap-1">
                        <span class="text-xl">${vegInfo.emoji}</span>
                        <span class="text-xs ${trendColor}">${trendIcon}</span>
                    </div>
                    ${!record.is_main_mandi ? '<span class="text-xs bg-orange-100 text-orange-600 px-1 rounded">nearby</span>' : ''}
                </div>
                
                <!-- Commodity name -->
                <h6 class="font-bold text-sm text-gray-800 mb-1 line-clamp-1">${commodity}</h6>
                
                <!-- Variety and grade -->
                <div class="text-xs text-gray-500 mb-2">
                    <div class="truncate">${variety}</div>
                    ${grade ? `<div class="truncate">Grade: ${grade}</div>` : ''}
                    ${quality ? `<div class="truncate">Quality: ${quality}</div>` : ''}
                </div>
                
                <!-- Price -->
                <div class="text-center mb-2">
                    <p class="text-lg font-bold text-gray-800">₹${price}</p>
                    <p class="text-xs text-gray-500">per ${unitName}</p>
                </div>
                
                <!-- Price range -->
                ${minPrice && maxPrice && minPrice !== maxPrice ? `
                    <div class="flex justify-between text-xs text-gray-600 mb-2 bg-gray-50 p-1 rounded">
                        <span>₹${minPrice}</span>
                        <span>₹${maxPrice}</span>
                    </div>
                ` : ''}
                
                <!-- Footer -->
                <div class="border-t pt-2 text-xs">
                    <div class="text-gray-500 truncate">
                        ${record.market !== mandiInfo.market ? record.market : '📅 ' + (record.arrival_date || record.fetch_date)}
                    </div>
                    <span class="inline-block mt-1 text-xs bg-${vegInfo.color}-50 text-${vegInfo.color}-600 px-1 py-0.5 rounded-full">
                        ${vegInfo.category}
                    </span>
                </div>
            </div>
        `;
    }).join('');
    
    marketCards.innerHTML = cardsHTML;
    dataView.classList.remove('hidden');
    
    showDebugInfo(`Displaying ${totalCommodities} crops in compact flex layout`);
}

/**
 * Display enhanced market data with vegetable categories and more varieties
 */
function displayEnhancedMarketData(records, mandiInfo) {
    const dataView = document.getElementById('market-data-view');
    const dataTitle = document.getElementById('data-title');
    const dataCount = document.getElementById('data-count');
    const marketCards = document.getElementById('market-cards');
    
    if (!dataView || !marketCards) return;
    
    // Group records by commodity and get the most recent price for each
    const commodityGroups = {};
    records.forEach(record => {
        const commodity = record.commodity || 'Unknown';
        const variety = record.variety || 'General';
        const key = `${commodity}_${variety}`;
        
        if (!commodityGroups[key] || record.fetch_date > commodityGroups[key].fetch_date) {
            commodityGroups[key] = record;
        }
    });
    
    // Convert to array and group by category
    const commodities = Object.values(commodityGroups);
    const categoryGroups = {};
    
    commodities.forEach(record => {
        const vegInfo = getVegetableInfo(record.commodity);
        const category = vegInfo.category;
        
        if (!categoryGroups[category]) {
            categoryGroups[category] = [];
        }
        categoryGroups[category].push({...record, vegInfo});
    });
    
    // Update header
    const totalCommodities = commodities.length;
    const latestDate = Math.max(...records.map(r => new Date(r.fetch_date).getTime()));
    const displayDate = new Date(latestDate).toLocaleDateString();
    
    if (dataTitle) dataTitle.textContent = `${mandiInfo.market} - Market Prices`;
    if (dataCount) dataCount.textContent = `${totalCommodities} varieties • Updated: ${displayDate}`;
    
    // Sort categories for better display
    const categoryOrder = ['Leafy Greens', 'Root Vegetables', 'Fruit Vegetables', 'Gourds', 'Legumes', 'Other Vegetables'];
    const sortedCategories = Object.keys(categoryGroups).sort((a, b) => {
        const aIndex = categoryOrder.indexOf(a);
        const bIndex = categoryOrder.indexOf(b);
        if (aIndex === -1 && bIndex === -1) return a.localeCompare(b);
        if (aIndex === -1) return 1;
        if (bIndex === -1) return -1;
        return aIndex - bIndex;
    });
    
    // Generate HTML with categories
    let html = '';
    sortedCategories.forEach(category => {
        const items = categoryGroups[category];
        
        html += `
            <div class="col-span-full">
                <h5 class="text-lg font-semibold text-gray-700 mb-3 pb-2 border-b flex items-center gap-2">
                    <span class="bg-${getCategoryColor(category)}-100 text-${getCategoryColor(category)}-700 px-3 py-1 rounded-full text-sm font-medium">
                        ${category} (${items.length})
                    </span>
                </h5>
            </div>
        `;
        
        items.forEach(record => {
            const price = record.modal_price || record.min_price || record.max_price || 'N/A';
            const variety = record.variety || 'General';
            const minPrice = record.min_price;
            const maxPrice = record.max_price;
            const vegInfo = record.vegInfo;
            
            // Calculate price trend (mock for now)
            const trend = Math.random() > 0.5 ? 'up' : 'down';
            const trendIcon = trend === 'up' ? '📈' : '📉';
            const trendColor = trend === 'up' ? 'text-red-600' : 'text-green-600';
            
            html += `
                <div class="p-4 border rounded-lg shadow-sm hover:shadow-md transition-all bg-white hover:bg-gray-50">
                    <div class="flex justify-between items-start mb-2">
                        <div class="flex items-center gap-2">
                            <span class="text-2xl">${vegInfo.emoji}</span>
                            <div>
                                <h6 class="font-bold text-lg text-gray-800">${record.commodity}</h6>
                                <p class="text-xs text-gray-500">${variety}</p>
                            </div>
                        </div>
                        <span class="text-xs ${trendColor}">${trendIcon}</span>
                    </div>
                    
                    <div class="text-center mb-3">
                        <p class="text-2xl font-bold text-gray-800">₹${price}</p>
                        <p class="text-sm text-gray-500">per Quintal</p>
                    </div>
                    
                    ${minPrice && maxPrice && minPrice !== maxPrice ? `
                        <div class="flex justify-between text-xs text-gray-600 mb-2 bg-gray-50 p-2 rounded">
                            <span>Min: ₹${minPrice}</span>
                            <span>Max: ₹${maxPrice}</span>
                        </div>
                    ` : ''}
                    
                    <div class="border-t pt-2">
                        <p class="text-xs text-gray-500 flex items-center gap-1">
                            📅 ${record.arrival_date || record.fetch_date}
                        </p>
                        <span class="inline-block mt-1 text-xs bg-${vegInfo.color}-50 text-${vegInfo.color}-600 px-2 py-1 rounded-full">
                            ${vegInfo.category}
                        </span>
                    </div>
                </div>
            `;
        });
    });
    
    marketCards.innerHTML = html;
    dataView.classList.remove('hidden');
}

/**
 * Get category color for styling
 */
function getCategoryColor(category) {
    const colors = {
        'Leafy Greens': 'green',
        'Root Vegetables': 'orange', 
        'Fruit Vegetables': 'red',
        'Gourds': 'blue',
        'Legumes': 'purple',
        'Fungi': 'yellow',
        'Grains': 'amber',
        'Other Vegetables': 'gray'
    };
    return colors[category] || 'gray';
}

/**
 * Display market data in cards
 */
function displayMarketData(records, mandiInfo, date) {
    const dataView = document.getElementById('market-data-view');
    const dataTitle = document.getElementById('data-title');
    const dataCount = document.getElementById('data-count');
    const marketCards = document.getElementById('market-cards');
    
    if (!dataView || !marketCards) return;
    
    // Update header
    if (dataTitle) dataTitle.textContent = `${mandiInfo.market} - Market Prices`;
    if (dataCount) dataCount.textContent = `${records.length} commodities • ${date}`;
    
    // Group records by commodity for better display
    const commodityGroups = {};
    records.forEach(record => {
        const commodity = record.commodity || 'Unknown';
        if (!commodityGroups[commodity]) {
            commodityGroups[commodity] = [];
        }
        commodityGroups[commodity].push(record);
    });
    
    marketCards.innerHTML = Object.entries(commodityGroups).map(([commodity, commodityRecords]) => {
        // Get the best record for this commodity (highest modal price or most complete data)
        const bestRecord = commodityRecords.reduce((best, current) => {
            const currentPrice = parseFloat(current.modal_price) || 0;
            const bestPrice = parseFloat(best.modal_price) || 0;
            return currentPrice > bestPrice ? current : best;
        });
        
        const price = bestRecord.modal_price || bestRecord.min_price || bestRecord.max_price || 'N/A';
        const variety = bestRecord.variety || 'General';
        const minPrice = bestRecord.min_price;
        const maxPrice = bestRecord.max_price;
        
        return `
            <div class="p-4 border rounded-lg shadow-sm hover:shadow-md transition-all bg-white">
                <div class="flex justify-between items-start mb-2">
                    <h5 class="font-bold text-lg text-green-800">${commodity}</h5>
                    <span class="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">${variety}</span>
                </div>
                
                <div class="text-center mb-3">
                    <p class="text-3xl font-bold text-gray-800">₹${price}</p>
                    <p class="text-sm text-gray-500">per Quintal</p>
                </div>
                
                ${minPrice && maxPrice && minPrice !== maxPrice ? `
                    <div class="flex justify-between text-xs text-gray-600 mb-2">
                        <span>Min: ₹${minPrice}</span>
                        <span>Max: ₹${maxPrice}</span>
                    </div>
                ` : ''}
                
                <div class="border-t pt-2">
                    <p class="text-xs text-gray-500">
                        📅 ${bestRecord.arrival_date || date}
                    </p>
                    ${commodityRecords.length > 1 ? `
                        <p class="text-xs text-blue-600 mt-1">
                            +${commodityRecords.length - 1} more varieties available
                        </p>
                    ` : ''}
                </div>
            </div>
        `;
    }).join('');
    
    dataView.classList.remove('hidden');
    showDebugInfo(`Displayed ${records.length} records for ${Object.keys(commodityGroups).length} commodities`);
}

/**
 * Show error message
 */
function showError(title, message) {
    const errorContainer = document.getElementById('market-error');
    errorContainer.innerHTML = `<h4>${title}</h4><p>${message}</p>`;
    errorContainer.classList.remove('hidden');
}

/**
 * Initialize location detection and mandi discovery
 */
async function initializeLocationDetection() {
    const locationBtn = document.getElementById('use-location-btn');
    const locationStatus = document.getElementById('location-status');
    const locationIcon = document.getElementById('location-icon');
    const locationText = document.getElementById('location-text');
    
    locationBtn.disabled = true;
    locationIcon.textContent = '🔄';
    locationText.textContent = 'Detecting Location...';
    locationStatus.textContent = 'Getting your location...';
    locationStatus.classList.remove('hidden');
    
    try {
        // Get user's geolocation
        const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, {
                timeout: 10000,
                enableHighAccuracy: true
            });
        });
        
        const { latitude, longitude } = position.coords;
        showDebugInfo(`Got coordinates: ${latitude}, ${longitude}`);
        
        // Reverse geocode to get location details
        locationStatus.textContent = 'Finding your area...';
        const geoResponse = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
        const geoData = await geoResponse.json();
        
        const userLocation = {
            city: geoData.address?.city || geoData.address?.town || geoData.address?.village,
            district: geoData.address?.county || geoData.address?.district || geoData.address?.state_district,
            state: geoData.address?.state,
            lat: latitude,
            lon: longitude
        };
        
        showDebugInfo(`Detected location: ${JSON.stringify(userLocation)}`);
        
        // Fetch all available mandis
        locationStatus.textContent = 'Finding nearby mandis...';
        updateLoader('Discovering Mandis', 'Scanning government database for nearby markets...');
        
        const allMandis = await fetchAvailableMandis();
        showDebugInfo(`Found ${allMandis.length} total mandis in database`);
        
        // Find nearby mandis
        const nearbyMandis = findNearbyMandis(allMandis, userLocation);
        showDebugInfo(`Found ${nearbyMandis.length} nearby mandis`);
        
        // Update UI
        updateLoader('', '', false);
        populateMandiDropdown(nearbyMandis, userLocation);
        
        // Show mandi selection section
        document.getElementById('mandi-selection').classList.remove('hidden');
        
        // Update location button
        locationIcon.textContent = '✅';
        locationText.textContent = 'Location Detected';
        locationStatus.textContent = `Found mandis near ${[userLocation.city, userLocation.district, userLocation.state].filter(Boolean).join(', ')}`;
        
        showDebugInfo('Location detection and mandi discovery completed successfully');
        
    } catch (error) {
        console.error('Location detection failed:', error);
        locationIcon.textContent = '❌';
        locationText.textContent = 'Location Failed';
        locationStatus.textContent = 'Could not detect location. Please use manual search.';
        showError('Location Error', 'Unable to detect your location. Please search manually or allow location access.');
        updateLoader('', '', false);
    }
    
    locationBtn.disabled = false;
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    renderMarket();
    
    setTimeout(() => {
        const useLocBtn = document.getElementById('use-location-btn');
        const cityForm = document.getElementById('city-form');
        const mandiDropdown = document.getElementById('mandi-dropdown');
        
        // Location detection
        if (useLocBtn) {
            useLocBtn.addEventListener('click', initializeLocationDetection);
        }
        
        // Mandi selection
        if (mandiDropdown) {
            mandiDropdown.addEventListener('change', (e) => {
                if (e.target.value) {
                    const mandiInfo = JSON.parse(e.target.value);
                    fetchMarketDataForMandi(mandiInfo);
                    document.getElementById('market-data-view').classList.add('hidden');
                    document.getElementById('market-error').classList.add('hidden');
                }
            });
        }
        
        // Manual search
        if (cityForm) {
            cityForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                const cityInput = document.getElementById('city-input');
                const searchTerm = cityInput.value.trim();
                
                if (!searchTerm) return;
                
                await searchMandisManually(searchTerm);
            });
        }
        
    }, 100);
});