import React, {useState} from 'react';
import './ShopSearchPage.css';

import CoffeeShop from '../../components/CoffeeShop/CoffeeShop';

export default function ShopSearchPage({ handleSearchSubmit, shops }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (event) => setSearchTerm(event.target.value)

    return (
        <div className="SearchPage">
            <form
                onSubmit={(event) => handleSearchSubmit(event, searchTerm)}
                className="city-search"
            >
                <input 
                    name="searchTerm"
                    value={searchTerm}
                    onChange={handleInputChange}
                    type="text"
                    required
                    placeholder="Enter city"
                />
                <button type="submit">Search</button>
            </form>
            <div>
            {shops.length ? 
                shops.map(shop => {
                    <CoffeeShop shop={shop} />
                })
            :
            ''
            }
            </div>
        </div>
    )
}
