import React from 'react';

import './UserShops.css';

export default function UserShops({ shops }) {
    return (
        <div className="UserShops">
            {shops.map((shop, idx) =>
                <div key={idx} className="user-shop">
                    <h1>{shop.name}</h1>
                    <h3>{shop.favorite ? "Favorite" : "Not Fav"}</h3>
                </div>
            )}
        </div>
    )
}