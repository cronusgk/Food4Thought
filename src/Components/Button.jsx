import snoopyeat from "../Images/snoopyeating.png"

function Button(){
    return <button className="btn">
        <img className="btn-image" src={snoopyeat} alt=""
        height="45px"
        width="45px"/>
    </button>
    
}

export default Button;