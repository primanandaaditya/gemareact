import React from "react";
import Navbar from "./Navbar";
import MainSidebar from "./MainSidebar";

export default function ContentWrapper(props){
    return(
        <div>
            <Navbar/>
            <MainSidebar/>
            <div className="content-wrapper">
                <section className="content">
                    <div className="container-fluid">
                        <br/>
                        <noscript>You need to enable JavaScript to run this app.</noscript>
                        {props.children}
                    </div>
                </section>
            </div>
        </div>
    )
}