import React from "react";
import star from "../img/Star 1.png";
export default function Card(props) {
    console.log(props);
    return (

        <div className="card-holder">
            <div className="card-img-holder">
                <img className="image" src={`../images/${props.img}`} alt="image">
                </img>
                <span className="card-statue">{props.status == 0 ? "Sold Out" : "Online"}</span>
            </div>
            <div className="card-info">
                <div className="card-rating">
                    <span className="star"><img src={star} alt="star"></img>
                    </span>
                    <span>{props.rating}</span>
                    <span>({props.review}) . {props.location}</span>
                </div>
                <p className="card-details">{props.title}
                </p>
                <p className="card-price"><strong>From ${props.price} </strong>/ person</p>
            </div>
        </div>
    );
}