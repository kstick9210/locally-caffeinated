import React from "react";  
import {Link} from "react-router-dom";
import "./CoffeeShop.css";

export default function CoffeeShop({shop}) {
    return (
        <>
            <Link to="/" className="CoffeeShop">
                <h1 className="shop-name">
                    <img src={shop.icon} alt="google places icon" className="places-icon"/>
                    &nbsp;{shop.name}
                </h1>
                <h4 className="shop-address">{shop.formatted_address}</h4>
                <h3>Google Rating: {shop.rating} ⭑</h3>
            </Link>
            <br />
        </>
    )
}
