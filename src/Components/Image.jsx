import food1 from "../Images/food1.png"
import food2 from "../Images/food2.png"
import food3 from "../Images/food3.png"
import food4 from "../Images/food4.png"
import food5 from "../Images/food5.png"
import food6 from "../Images/food6.png"
import snoopyeat from "../Images/snoopyeating.png";
import { useState } from 'react';

const foods = [
    food1,
    food2,
    food3,
    food4,
    food5,
    food6
];

function randomNum(){
    let rand = Math.floor(Math.random() * 6);
    return rand;
}

function Image(){
    const [currPicture, setPicture] = useState(foods[0]);
    
    return( 
        <div className="image-wrapper">
            <div className="random-image-div">
                <img className="random-image" src={currPicture} alt='' />
            </div>
            <button className="btn" onClick={() => setPicture(foods[randomNum()])}>
                <img className="btn-image" src={snoopyeat} alt="" />
            </button>
        </div>
    );
}

export default Image;