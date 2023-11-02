const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Drawing = require('./drawing');

const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017/doodleBin';
const client = new MongoClient(url);

client.connect()
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.log('Error connecting to MongoDB:', err);
    })

const db = client.db('doodleBin');

app.use(express.json());

app.post('./api/save-drawing', (req, res) => {
    const drawingData = req.body.drawingData;
    const newDrawing = new Drawing({
        img: drawingData
    });
    newDrawing.save((err, drawing) => {
        if (err) {
            res.status(500).json({error: 'Error saving the drawing to the database'});
        } else {
            res.status(201).json(drawing);
        }
    })
})

app.get('/api/get-drawings', async (req, res) => {
    try {
        const drawings = await Drawing.find({});
        res.status(500).json({ error: 'Error retrieving drawings' });
    } catch (err) {
        console.error('Error retrieving drawings:', err);
        res.status(500).json({ error: 'Error retrieving drawings' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});