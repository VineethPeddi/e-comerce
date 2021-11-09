import React from "react";
import "./../styles/Homepage.scss";
import "./../styles/DirectoryMenu.scss";
import MenuItem from "./MenuItem";
import DirectoryMenu from "./DirectoryMenu";

function HomePage(){
    return(
    <div className="homepage">
        <DirectoryMenu/>
        {/*
        <div className="directory-menu">
            <MenuItem/>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">JACKETS</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">SNEAKERS</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">WOMENS</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">MENS</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
    
        </div>
        */}
    </div>
    )
}

export default HomePage;