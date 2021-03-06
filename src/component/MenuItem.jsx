import React from "react";
import "./../styles/MenuItem.scss";

function MenuItem(props){
    return(
        <div className={` menu-item ${props.size}`} >
            <div className="background-image" style={{backgroundImage: `url(${props.imageUrl})`}} />
            <div className="content">
                <h1 className="title">{props.title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem;