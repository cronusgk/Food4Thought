import food1 from "../Images/food1.png"
import food2 from "../Images/food2.png"
import food3 from "../Images/food3.png"
import food4 from "../Images/food4.png"
import food5 from "../Images/food5.png"
import food6 from "../Images/food6.png"
import food7 from "../Images/food7.png"
import food8 from "../Images/food8.png"

import snoopyeat from "../Images/snoopyeating.png";
import { useState } from 'react';

const foods = [
    food1,
    food2,
    food3,
    food4,
    food5,
    food6,
    food7,
    food8
];

function randomNum(min, max){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    const num = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    return num
}

function Image(){
    const [currPicture, setPicture] = useState(foods[0]);
    return( 
        <div className="image-wrapper">
            <div className="random-image-div">
                <img className="random-image" src={currPicture} alt='' />
            </div>
            <button className="btn" onClick={() => setPicture(foods[randomNum(0, 7)])}>
                <img className="btn-image" src={snoopyeat} alt="" />
            </button>
        </div>
    );
}

export default Image;