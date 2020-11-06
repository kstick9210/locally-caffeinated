import React from 'react';
import './SearchResults.css';
import CoffeeShop from '../CoffeeShop/CoffeeShop';

const SearchResults = ({ shops }) => {
    return (
        <div className="SearchResults">
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