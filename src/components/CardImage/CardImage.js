import React from "react";
import './CardImage.css' ;

const CardImage = ({ url } ) => {
    return (
        <div className="card-image">
            <img src= {url} alt="img 1" />
        </div>
    )
}

export default CardImage