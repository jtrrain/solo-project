// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(220);
// }

// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const Drawing = require('./ItemModel')
// const url = 'mongodb+srv://jtjerrytrinh:p20ssw101rd@cluster0.bditiqx.mongodb.net/?retryWrites=true&w=majority';
// mongoose.connect(url);

function _(selector) {
  return document.querySelector(selector);
}
function setup(){
  let canvas = createCanvas(650, 600);
  canvas.parent("canvas-wrapper");
  background(255);
}
function mouseDragged() {
  let type = _("#pen-pencil").checked?"pencil":"brush";
  let size = parseInt(_("#pen-size").value);
  let color = _("#pen-color").value;
  fill(color);
  stroke(color);
  if (type == "pencil") {
    line(pmouseX, pmouseY, mouseX, mouseY);
  } else {
    ellipse(mouseX, mouseY, size, size);
  }
}
_("#reset-canvas").addEventListener("click", function(){
  background(255);
});
_("#save-canvas").addEventListener("click", function() {
  console.log('YOYOYO', canvas);
  saveCanvas(canvas, "sketch", "png");
  // const doodle = document.getElementById("defaultCanvas0");
  // // const doodle = document.getElementById("canvas-wrapper"); // not an object so .toDataURL doesnt run in the next line
  // const dataURL = doodle.toDataURL('image/png');
  // console.log("WTF BRUV", doodle)
  // fetch('/api/save-drawing', {
  //   method: 'POST',
  //   // body: new Drawing({
  //   //   img: JSON.stringify({ drawingData: dataURL })
  //   // }),
  //   body: JSON.stringify({ drawingData: dataURL }),
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // })
  // .then((response) => {
  //   if (response.ok) {
  //     console.log('Drawing saved to the database');
  //   } else {
  //     console.log('Error saving the drawing');
  //   }
  // })
  // .catch((error) => {
  //   console.error('Error:', error);
  // })

    // const drawingData = req.body.drawingData;
    // const drawing = document.getElementById("defaultCanvas0");
    // const drawingData = drawing.toDataURL('image/png');
    
    // const newDrawing = new Drawing({
    //     img: drawingData
    // });
    // newDrawing.save((err, drawing) => {
    //     if (err) {
    //         console.log('FAILED', error)
    //         res.status(500).json({error: 'Error saving the drawing to the database'});
    //     } else {
    //         console.log('we did it');
    //         res.status(201).json(drawing);
    //     }
    // })

})