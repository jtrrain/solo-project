import React from 'react';
import { render } from 'react-dom';
import Feed from './components/Feed';
import styles from './styles.scss';

function sendToServer() {
    // const doodle = document.getElementById("sketchpad");
    // // const doodle = document.getElementById("defaultCanvas0"); // can't read the properties with the other html
    // // const doodle = document.getElementById("canvas-wrapper"); // not an object so .toDataURL doesnt run in the next line
    // console.log("WTF BRUV", doodle)
    // const dataURL = doodle.toDataURL('image/png');
    // fetch('/api/save-drawing', {
    //     method: 'POST',
    //     // body: new Drawing({
    //     //   img: JSON.stringify({ drawingData: dataURL })
    //     // }),
    //     body: JSON.stringify({ drawingData: dataURL }),
    //     headers: {
    //     'Content-Type': 'application/json'
    //     }
    // })
    // .then((response) => {
    //     if (response.ok) {
    //     console.log('Drawing saved to the database');
    //     } else {
    //     console.log('Error saving the drawing');
    //     }
    // })
    // .catch((error) => {
    //     console.error('Error:', error);
    // })

    // const drawingData = req.body.drawingData;
    // const newDrawing = new Drawing({
    //     img: drawingData
    // });
    // newDrawing.save((err, drawing) => {
    //     if (err) {
    //         res.status(500).json({error: 'Error saving the drawing to the database'});
    //     } else {
    //         res.status(201).json(drawing);
    //     }
    // })

}

document.getElementById("startDrawing").addEventListener("click", function () {
    document.getElementById("sketchpad").style.display = "block";
});

// document.getElementById("quitDrawing").addEventListener("click", function () {
//     sendToServer();
//     document.getElementById("sketchpad").style.display = "none";
// });

const App = () => {
    return (
        <div>
            <Feed url = { url }/>
        </div>
    )
}

render (<App />, document.getElementById('root'));