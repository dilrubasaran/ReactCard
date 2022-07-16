import React from "react";
import './card.css'
import CardTitle from '../CardTitle/CardTitle';
import CardImage from "../CardImage/CardImage";
import CardInfo from "../CardInfo/CardInfo";


const Card = ({title, image, info, onClick}) => {
    return (
        <div className="card" onClick={()=>{onClick()}}>
            <div className="card-body">
                <CardTitle title = {title} />
                <CardImage url={image} />
               <CardInfo info = {info}/>
            </div>
        </div>
    )
}

export default Card