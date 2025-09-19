// This function will be called from script.js when the profile tab is clicked.
function initializeProfileTab() {
    const profileContent = document.getElementById('profile-content');
    // We check if the user is "logged in" by looking at localStorage.
    const loggedInFarmer = localStorage.getItem('farmerProfile');

    if (loggedInFarmer) {
        renderProfileView(JSON.parse(loggedInFarmer));
    } else {
        renderInitialView();
    }
}

// Renders the initial choice: Login or Sign Up
function renderInitialView() {
    const profileContent = document.getElementById('profile-content');
    profileContent.innerHTML = `
        <div class="rounded-lg border bg-white p-8 shadow-sm text-center max-w-md mx-auto">
            <h3 class="text-2xl font-bold mb-4" data-key="profile_welcome_title">Welcome, Farmer!</h3>
            <p class="text-gray-600 mb-6" data-key="profile_welcome_subtitle">Please log in to view your profile or create a new account to get started.</p>
            <div class="flex gap-4 justify-center">
                <button id="show-login-btn" class="gradient-primary text-white font-medium py-2 px-6 rounded-lg" data-key="profile_login_button">Log In</button>
                <button id="show-signup-btn" class="bg-gray-200 text-gray-800 font-medium py-2 px-6 rounded-lg" data-key="profile_signup_button">Sign Up</button>
            </div>
        </div>
    `;
    document.getElementById('show-login-btn').addEventListener('click', renderLoginForm);
    document.getElementById('show-login-btn').addEventListener('click', () => {
        renderLoginForm();
    });
    document.getElementById('show-signup-btn').addEventListener('click', renderSignupForm);
    translatePage(); // Apply translations
    translatePage();
}

// Renders the Login Form
function renderLoginForm() {
    const profileContent = document.getElementById('profile-content');
    profileContent.innerHTML = `
        <div class="rounded-lg border bg-white p-8 shadow-sm max-w-md mx-auto">
            <h3 class="text-2xl font-bold mb-4" data-key="profile_login_button">Log In</h3>
            <form id="login-form">
                <div class="mb-4">
                    <label for="login-id" class="block text-sm font-medium text-gray-700" data-key="profile_form_farmerid_label">Farmer ID (Phone Number)</label>
                    <input type="text" id="login-id" name="farmerId" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" required>
                </div>
                <div class="mb-6">
                    <label for="login-password" class="block text-sm font-medium text-gray-700" data-key="profile_form_password_label">Password</label>
                    <input type="password" id="login-password" name="password" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" required>
                </div>
                <button type="submit" class="w-full gradient-primary text-white font-medium py-2 px-4 rounded-lg" data-key="profile_login_button">Log In</button>
                <p id="login-error" class="text-red-500 text-sm mt-2"></p>
            </form>
            <button id="back-to-initial" class="text-sm text-gray-600 mt-4 hover:underline" data-key="profile_form_back_button">Back</button>
        </div>
    `;
    document.getElementById('back-to-initial').addEventListener('click', renderInitialView);
    document.getElementById('back-to-initial').addEventListener('click', () => {
        renderInitialView();
    });
    document.getElementById('login-form').addEventListener('submit', handleLogin);
    translatePage(); // Apply translations
    translatePage();
}

// Renders the Signup Form
function renderSignupForm() {
    const profileContent = document.getElementById('profile-content');
    profileContent.innerHTML = `
       <div class="rounded-lg border bg-white p-8 shadow-sm max-w-lg mx-auto">
            <h3 class="text-2xl font-bold mb-4" data-key="profile_signup_title">Create Your Profile</h3>
            <form id="signup-form">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label for="signup-name" class="block text-sm font-medium text-gray-700" data-key="profile_form_fullname_label">Full Name</label>
                        <input type="text" id="signup-name" name="fullName" class="mt-1 block w-full input" required>
                    </div>
                    <div>
                        <label for="signup-id" class="block text-sm font-medium text-gray-700" data-key="profile_form_farmerid_label">Farmer ID (Phone Number)</label>
                        <input type="tel" id="signup-id" name="farmerId" class="mt-1 block w-full input" required>
                    </div>
                    <div>
                        <label for="signup-password" class="block text-sm font-medium text-gray-700" data-key="profile_form_password_label">Password</label>
                        <input type="password" id="signup-password" name="password" class="mt-1 block w-full input" required>
                    </div>
                     <div>
                        <label for="signup-location" class="block text-sm font-medium text-gray-700" data-key="profile_form_location_label">Location (e.g., Meerut, UP)</label>
                        <input type="text" id="signup-location" name="location" class="mt-1 block w-full input" required>
                    </div>
                    <div>
                        <label for="signup-landsize" class="block text-sm font-medium text-gray-700" data-key="profile_form_landsize_label">Land Size (in Acres)</label>
                        <input type="number" id="signup-landsize" name="landSize" class="mt-1 block w-full input" required>
                    </div>
                    <div>
                        <label for="signup-crops" class="block text-sm font-medium text-gray-700" data-key="profile_form_primarycrops_label">Primary Crops</label>
                        <input type="text" id="signup-crops" name="primaryCrops" data-key-placeholder="profile_form_primarycrops_placeholder" placeholder="e.g., Wheat, Sugarcane" class="mt-1 block w-full input" required>
                    </div>
                </div>
                <button type="submit" class="w-full gradient-primary text-white font-medium py-2 px-4 rounded-lg mt-6" data-key="profile_form_createaccount_button">Create Account</button>
                <p id="signup-error" class="text-red-500 text-sm mt-2"></p>
            </form>
            <button id="back-to-initial" class="text-sm text-gray-600 mt-4 hover:underline" data-key="profile_form_back_button">Back</button>
        </div>
    `;
    document.getElementById('back-to-initial').addEventListener('click', renderInitialView);
    document.getElementById('back-to-initial').addEventListener('click', () => {
        renderInitialView();
    });
    document.getElementById('signup-form').addEventListener('submit', handleSignup);
    translatePage(); // Apply translations
    translatePage();
}

// Renders the farmer's profile data
function renderProfileView(profileData) {
    const profileContent = document.getElementById('profile-content');
    profileContent.innerHTML = `
        <div class="rounded-lg border bg-white p-8 shadow-sm max-w-2xl mx-auto">
            <div class="flex items-center justify-between mb-6">
                 <h3 class="text-2xl font-bold" data-key="profile_view_title">Farmer Profile</h3>
                 <button id="logout-btn" class="text-sm text-red-600 hover:underline" data-key="profile_view_logout_button">Log Out</button>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                <div><strong data-key="profile_view_fullname">Full Name:</strong> <p>${profileData.fullName}</p></div>
                <div><strong data-key="profile_view_farmerid">Farmer ID:</strong> <p>${profileData.farmerId}</p></div>
                <div><strong data-key="profile_view_location">Location:</strong> <p>${profileData.location}</p></div>
                <div><strong data-key="profile_view_landsize">Land Size:</strong> <p>${profileData.landSize} Acres</p></div>
                <div class="md:col-span-2"><strong data-key="profile_view_primarycrops">Primary Crops:</strong> <p>${profileData.primaryCrops}</p></div>
            </div>
        </div>
    `;
    document.getElementById('logout-btn').addEventListener('click', () => {
        localStorage.removeItem('farmerProfile'); // Clear session
        renderInitialView();
    });
    translatePage(); // Apply translations
    translatePage();
}


// --- API Communication ---

// Handle Login Submission
async function handleLogin(event) {
    event.preventDefault();
    const errorEl = document.getElementById('login-error');
    errorEl.textContent = '';
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        if (!response.ok) {
            throw new Error(result.message || 'Login failed');
        }
        
        // On successful login, store profile and render it
        localStorage.setItem('farmerProfile', JSON.stringify(result.profile));
        renderProfileView(result.profile);

    } catch (err) {
        errorEl.textContent = err.message;
    }
}

// Handle Signup Submission
async function handleSignup(event) {
    event.preventDefault();
    const errorEl = document.getElementById('signup-error');
    errorEl.textContent = '';
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('http://localhost:3000/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        if (!response.ok) {
            throw new Error(result.message || 'Signup failed');
        }
        
        // On successful signup, store profile and render it
        localStorage.setItem('farmerProfile', JSON.stringify(result.profile));
        renderProfileView(result.profile);

    } catch (err) {
        errorEl.textContent = err.message;
    }
}
