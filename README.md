# 🌾 Kisan Saathi - Smart Agricultural Advisory Platform

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-HTML%2FCSS%2FJS-blue?style=for-the-badge&logo=javascript" alt="Frontend">
  <img src="https://img.shields.io/badge/Styling-TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/AI-Google%20Gemini-4285F4?style=for-the-badge&logo=google-gemini" alt="Google Gemini">
  <img src="https://img.shields.io/badge/Data-OpenWeather%20%26%20data.gov.in-orange?style=for-the-badge" alt="APIs">
  <img src="https://img.shields.io/badge/Database-MongoDB%20Atlas-47A248?style=for-the-badge&logo=mongodb" alt="MongoDB Atlas">
</p>

<p align="center">
  <i>An AI-powered smart advisory platform for Indian farmers, providing crop guidance, weather alerts, real-time market prices, and pest detection in local languages.</i>
</p>

<p align="center">
  <!-- TODO: Add a screenshot or GIF of your application here! -->
  <img src="https://via.placeholder.com/800x450.png?text=Kisan+Saathi+Dashboard+Screenshot" alt="Kisan Saathi Application Screenshot" width="800"/>
</p>

---

## ✨ Key Features

Kisan Saathi is a comprehensive, client-side rendered web application designed to be a farmer's best digital companion.

*   **🤖 AI-Powered Advisory**:
    *   **Pest & Disease Detection**: Upload a photo of a crop and get an instant AI analysis of its health, including pest/disease identification and treatment recommendations (both organic and chemical).
    *   **AI Farming Assistant**: A conversational chatbot, powered by Google Gemini, to answer any farming-related questions 24/7.
    *   **Smart Weather Advice**: Get actionable farming advice (e.g., watering, crop protection) based on live local weather data.

*   **🌦️ Live Weather & Forecasts**:
    *   Fetches real-time weather using the user's geolocation via the OpenWeatherMap API.
    *   Provides a 7-day forecast to help plan farming activities.

*   **📈 Real-Time Market Prices**:
    *   Integrates with the `data.gov.in` API to provide live mandi (market) prices.
    *   Auto-detects nearby mandis or allows manual search by city, district, or state.
    *   Displays prices for a wide variety of crops, including vegetables, fruits, grains, and more.

*   **👤 User Profile Management**:
    *   A simple and effective user authentication system (Login/Signup).
    *   User session is persisted in `localStorage` for a seamless experience.
    *   *(Note: Requires a local Node.js/Express backend for handling user data).*

*   **🌐 Multilingual Support**:
    *   Fully functional interface in both **English** and **हिंदी (Hindi)**.
    *   The architecture is built to easily support more regional languages by adding new JSON translation files.

*   **📱 Modern & Responsive UI**:
    *   Clean, intuitive, and mobile-first design built with **Tailwind CSS**.
    *   A smooth, single-page application (SPA) experience with lazy-loading for different feature tabs to ensure fast initial load times.

---

## 🛠️ Tech Stack

This project is built with a modern, frontend-focused stack that leverages powerful external APIs.

*   **Frontend**:
    *   **HTML5**, **CSS3**, **JavaScript (ES Modules)**
    *   **Tailwind CSS**: For all styling and responsive design.
*   **Core AI & Data Services**:
    *   **Google Gemini API**: For all generative AI features (pest detection, chatbot, smart advice).
    *   **OpenWeatherMap API**: For weather data and forecasts.
    *   **data.gov.in API**: For live agricultural market prices.
    *   **Nominatim (OpenStreetMap)**: For reverse geocoding (finding location from coordinates).
*   **Architecture**:
    *   **Backend**: **Node.js** with **Express** for the API and user management.
    *   **Database**: **MongoDB Atlas** for storing user profiles.
    *   **Client-Side Rendered (CSR)**: The application runs entirely in the browser.
    *   **Modular JavaScript**: Code is organized into modules (`script.js`, `MarketPrice.js`, `chatbot.js`, `profile.js`) for better maintainability.
*   **User Management (Backend)**:
    *   The profile system is designed to communicate with a local backend server (e.g., **Node.js/Express**) for user signup and login.

---

## 🚀 Getting Started

To run this project locally, follow these steps:

### 1. Clone the Repository

First, clone the project to your local machine.

```bash
git clone https://github.com/your-username/kisan-saathi.git
cd kisan-saathi
```

### 2. Frontend Setup

The frontend is a static site but requires a local server to handle API requests correctly and avoid CORS issues.

1.  **Secure Your API Keys:**
    Your frontend code uses several API keys that are currently hardcoded. For security, it's best to manage these properly, but for local testing, you can update them directly.
    *   In `script.js`, update `OPENWEATHER_API_KEY` and the Gemini API Key.
    *   In `MarketPrice.js`, update `MARKET_API_KEY`.

2.  **Serve the Frontend:**
    Use a simple local server. If you have Node.js installed, `live-server` is a great option as it auto-reloads on changes.

    ```bash
    npm install -g live-server
    live-server
    ```
    Your frontend will be available at `http://127.0.0.1:8080` (or a similar address).

### 3. Backend Setup (Node.js, Express & MongoDB)

The backend handles user authentication (signup/login).

1.  **Install Node.js:**
    If you don't have it, download and install the LTS version of Node.js for your operating system.

2.  **Initialize the Project and Install Dependencies:**
    In your project's root directory (`kisan-saathi`), run the following commands to create a `package.json` file and install the necessary packages.

    ```bash
    # Initialize a Node.js project
    npm init -y

    # Install Express, MongoDB driver, CORS, and bcrypt for password hashing
    npm install express mongodb cors 
    ```

3.  **Set up MongoDB Atlas:**
    *   Go to MongoDB Atlas and create a free account.
    *   Create a new cluster (the free tier is sufficient).
    *   In your cluster, go to **Database Access** and create a new database user with a username and a secure password.
    *   Go to **Network Access**, click "Add IP Address", and select "Allow Access from Anywhere" (0.0.0.0/0) for easy local development. For production, you should restrict this.
    *   Go back to your cluster's **Overview**, click **Connect**, choose "Drivers", and copy the connection string.

4.  **Update the Connection String:**
    Open `server.js` and replace the placeholder `mongoUri` with the connection string you copied from Atlas. Make sure to replace `<username>`, `<password>`, and `?retryWrites...` with your database user's credentials.

    *Example:*
    `const mongoUri = "mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster0.iqyqmc0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";`

5.  **Run the Backend Server:**
    Open a new terminal in the project's root directory and run:

    ```bash
    node server.js
    ```
    You should see "Connected successfully to MongoDB Atlas!" and "Server running at http://localhost:3000".

Your application is now fully set up! The frontend at `http://127.0.0.1:8080` can now communicate with your backend API at `http://localhost:3000`.

---

<p align="center">
  Developed with ❤️ for Indian Farmers.
</p>