import React from "react";
import '../App.css'


function Hero() {
    return (
        <div className="heroContainer px-2 pt-3 mt-5 mb-4">
            <div className="mt-1">
                <h1 className="heroText">
                    Welcome to Checkmate!
                </h1>
                <p className="heroText fs-6">
                    Our app will allow you to create and manage any and all lists you may need. 
                </p>
            </div>
        </div>
    )
}

export default Hero