import React from "react";
import {Link} from "react-router-dom";

import "./LandingPage.css";

export default function LandingPage() {
    return (
        <div className="LandingPage-wrapper">
            <div className="LandingPage">
                <h1>Locally Caffeinated</h1>
                <h3>
                    <Link to="/search" className="underline">Search for coffe shops</Link> 
                    &nbsp;in any city around the world.
                </h3>
                <h3>
                    <Link to="/signup" className="underline">Create an account</Link>
                    &nbsp;to save your favorites.
                </h3>
            </div>
        </div>
    )
}
