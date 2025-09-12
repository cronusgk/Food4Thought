import snoopyeat from "../Images/snoopyeating.png";
import { useState } from 'react';



const importAll = (r) => r.keys().map(r);
const foods = importAll(require.context('../Images/foods', false, /\.(png|jpg?g|svg)$/));

function randomNum(min, max){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    const num = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    return num
}

function RandomImage(){
    const [currPicture, setPicture] = useState(foods[0]);
    return( 
        <div className="main-wrapper">
            <div className="random-image-div">
                <img className="random-image" src={currPicture} alt='' />
            </div>
            <button className="btn" onClick={() => setPicture(foods[randomNum(0, foods.length - 1)])}>
                <img className="btn-image" src={snoopyeat} alt=""/>
            </button>
        </div>
    );
}

export default RandomImage;