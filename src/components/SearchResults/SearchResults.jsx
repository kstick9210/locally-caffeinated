import React from 'react';
import './SearchResults.css';
import CoffeeShop from '../CoffeeShop/CoffeeShop';

const SearchResults = ({ shops }) => {
    return (
        <div className="SearchResults">
            <div className="results-key">
                <h2>
                    <img src="https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/cafe-71.png" className="places-icon" alt="cafe icon"/>
                    &nbsp;Cafe&nbsp;&nbsp;&nbsp;
                    <img src="https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png" className="places-icon" alt="restaurant icon" />
                    &nbsp;Restaurant
                    </h2>
                    <hr />
            </div>
            {shops.map((shop, idx) =>
                <CoffeeShop 
                    key={idx} 
                    shop={shop}
                    idx={idx}
                />
            )}
        </div>
    )
}

export default SearchResults;