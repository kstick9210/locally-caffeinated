import React, {useState} from 'react';
import './ShopSearchPage.css';

export default function ShopSearchPage({handleSearchSubmit}) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (event) => setSearchTerm(event.target.value)

    return (
        <div className="SearchPage">
            <form
                onSubmit={(event) => handleSearchSubmit(event, searchTerm)}
            >
                <input 
                    name="searchTerm"
                    value={searchTerm}
                    onChange={handleInputChange}
                    type="text"
                    required
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}
