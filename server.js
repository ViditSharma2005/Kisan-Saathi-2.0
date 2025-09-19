const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const port = 3000;

// --- IMPORTANT: Replace with your MongoDB Atlas Connection String ---
const mongoUri = "mongodb+srv://Kisan_Saathi:Kisan2005@cluster0.iqyqmc0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(mongoUri);

let db;

// Middleware to parse JSON and enable CORS
app.use(cors());
app.use(express.json());

// --- API Endpoints ---

// SIGNUP Endpoint
app.post('/api/signup', async (req, res) => {
    try {
        const { fullName, farmerId, password, location, landSize, primaryCrops } = req.body;

        // Basic validation
        if (!fullName || !farmerId || !password) {
            return res.status(400).json({ message: 'Name, Farmer ID, and Password are required.' });
        }

        const farmersCollection = db.collection('farmers');

        // Check if farmer already exists
        const existingFarmer = await farmersCollection.findOne({ farmerId });
        if (existingFarmer) {
            return res.status(400).json({ message: 'A profile with this Farmer ID already exists.' });
        }
        
        // For a real app, you MUST hash the password here. For simplicity, we are storing it as plain text.
        // Example with bcrypt: const hashedPassword = await bcrypt.hash(password, 10);
        const newFarmer = {
            fullName,
            farmerId,
            password, // In a real app, this would be hashedPassword
            location,
            landSize,
            primaryCrops,
            createdAt: new Date(),
        };

        await farmersCollection.insertOne(newFarmer);
        
        // Don't send the password back to the client
        const { password: _, ...profile } = newFarmer;

        res.status(201).json({ message: 'Profile created successfully!', profile });

    } catch (error) {
        console.error('Signup Error:', error);
        res.status(500).json({ message: 'An internal server error occurred.' });
    }
});

// LOGIN Endpoint
app.post('/api/login', async (req, res) => {
    try {
        const { farmerId, password } = req.body;

        if (!farmerId || !password) {
            return res.status(400).json({ message: 'Farmer ID and Password are required.' });
        }
        
        const farmersCollection = db.collection('farmers');
        const farmer = await farmersCollection.findOne({ farmerId });

        if (!farmer) {
            return res.status(404).json({ message: 'No profile found with this Farmer ID.' });
        }

        // For a real app, you would compare the hashed password.
        // Example with bcrypt: const isMatch = await bcrypt.compare(password, farmer.password);
        if (farmer.password !== password) { // Simple comparison (INSECURE)
            return res.status(401).json({ message: 'Invalid password.' });
        }
        
        // Don't send the password back to the client
        const { password: _, ...profile } = farmer;

        res.status(200).json({ message: 'Login successful!', profile });

    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).json({ message: 'An internal server error occurred.' });
    }
});


// --- Start Server and Connect to DB ---
async function startServer() {
    try {
        await client.connect();
        console.log("Connected successfully to MongoDB Atlas!");
        db = client.db("KisanSaathi"); // Specify your database name here
        
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });

    } catch (error) {
        console.error("Failed to connect to the database", error);
        process.exit(1);
    }
}

startServer();
