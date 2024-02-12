import dotenv from 'dotenv';
dotenv.config();


import express from 'express';
const app = express();

import mongoose from 'mongoose';
import { MongoClient, ServerApiVersion } from 'mongodb';

//firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "oc-pace-setters.firebaseapp.com",
    projectId: "oc-pace-setters",
    storageBucket: "oc-pace-setters.appspot.com",
    messagingSenderId: "995939597577",
    appId: "1:995939597577:web:72cab9168a14a5c916a7d8",
    measurementId: "G-H0JVDPTLJS"
};

// MongoDB URI
const mongoDBUri = process.env.MONGODB_URI;

// MongoDB Client
const client = new MongoClient(mongoDBUri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

// Connect to MongoDB
async function run() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Successfully connected to MongoDB!");
    } finally {
        await client.close();
    }
}
run().catch(console.dir);

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

// API Routes
app.get('/api', (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree"] });
});

// Server Port
const port = process.env.PORT || 3000;

// Start Server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

// Connect to MongoDB using Mongoose
mongoose.connect(mongoDBUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB with Mongoose'))
    .catch(error => console.error('MongoDB connection error:', error));
