import React from 'react';
import "./CoffeeShop.css";

export default function CoffeeShop({shop}) {
    return (
        <div className="CoffeeShop">
            <h1 className="shop-name">
                <img src={shop.icon} alt="google places icon" className="places-icon"/>
                &nbsp;{shop.name}
            </h1>
            <h3>{shop.rating}</h3>
        </div>
    )
}
