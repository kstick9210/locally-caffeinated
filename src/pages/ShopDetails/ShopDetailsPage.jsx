import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import GoogleMaps from '../../components/GoogleMaps/GoogleMaps';

import "./ShopDetailsPage.css";
import chalkCup from "../../assets/chalk-coffee-cup.png";
import * as GoogleAPI from '../../services/googleplaces-api';

export default function ShopDetailsPage() {
    const [shopDetails, setShopDetails] = useState("");
    const { id } = useParams();

    const handleShopDetailsSearch = async (placeId) => {
        const shopDetailsResults = await GoogleAPI.getShopDetails(placeId);
        setShopDetails(shopDetailsResults.data.result);
    }

    useEffect(() => {
        handleShopDetailsSearch(id);
    })

    return (
        <div className="ShopDetailsPage">
            <div className="shop-info-wrapper">
                <h1 className="shop-name">{shopDetails.name}</h1>
                <div className="shop-info">
                    <a href={shopDetails.url} target="_blank"><h4 className="shop-address">{shopDetails.formatted_address}</h4></a>
                    <a href={`tel:${shopDetails.international_phone_number}`}>{shopDetails.international_phone_number}</a>
                    <a href={shopDetails.website} target="_blank">{shopDetails.website}</a>
                </div>
                <img src={chalkCup} alt="chalk coffee cup" className="chalk-coffee"/>
            </div>
            <GoogleMaps 
                lat={shopDetails.geometry.location.lat}
                lng={shopDetails.geometry.location.lng}
            />
        </div>
    )
}
