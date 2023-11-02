import React from 'react';
import { render } from 'react-dom';
import Feed from './components/Feed';
import styles from './styles.scss';

const url = 'mongoose database link goes here'

document.getElementById("startDrawing").addEventListener("click", function () {
    document.getElementById("sketchpad").style.display = "block";
});

document.getElementById("quitDrawing").addEventListener("click", function () {
    document.getElementById("sketchpad").style.display = "none";
});

const App = () => {
    return (
        <div>
            <Feed url = { url }/>
        </div>
    )
}

render (<App />, document.getElementById('root'));