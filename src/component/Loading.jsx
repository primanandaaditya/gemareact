import React from "react";
import load from "../tiktok.svg"

export default function Loading(){
    return(
        <div>
            <div className="overlay-wrapper">
                <div className="overlay">
                    <img height="60" width="60" src={load}/>
                </div>
            </div>
        </div>
    )
}