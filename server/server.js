const express = require('express');
const app = express();
const port = port = process.env.PORT || 3000;

const router = express.Router();
const Drawing = require('./drawing');

const multer = require('multer');

const drawingsRouter = require('./drawings');
app.use('./api', drawingsRouter);

const mongoose = require('mongoose');
const mongoURI = './uploads';

mongoose.connect(mongoURI);

const db = mongoose.connection;

router.post('./drawings', (req, res) => {
    const newDrawing = new Drawing({
        title: req.body.title,
        content: req.body.content
    });
    newDrawing.save((err, drawing) => {
        if (err) {
            res.status(500).json({error: 'Error saving the drawing'});
        } else {
            res.status(201).json(drawing);
        }
    })
})


db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
})

db.once('open', () => {
    console.log('Connected to MongoDB');
})

module.exports = router;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});