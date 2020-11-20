import React, {useState} from 'react';
import './ShopSearchPage.css';

import SearchResults from '../../components/SearchResults/SearchResults';

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
                    type="search"
                    required
                    placeholder="Search for coffee shops..."
                    autoFocus
                />
                <button type="submit" className="stlt-btn stlt-std-btn">Search</button>
            </form>
            {shops.length ? (
                <SearchResults shops={shops} />
            ) : (
            <h3 className="helper-text">Search by city, shop name, or both</h3>
            )}
        </div>
    )
}
