import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import "./UserPage.css";
import UserShops from "../../components/UserShops/UserShops";

import { getUserShops } from "../../services/shops-api";

export default function UserPage({user}) {
    const [userShops, setUserShops] = useState([]);
    const { id } = useParams();

    async function handleGetUserShops(id) {
        const userShops = await getUserShops(id);
        setUserShops(userShops);
    } 

    useEffect(() => {
        handleGetUserShops(id);
    }, [])


    let page = user ? (
        <div className="UserPage">
            <h1>{user.name}</h1>
            {userShops.length ? (
                <UserShops shops={userShops}/>
            ) : (
                <>
                    <h1>Loading</h1>
                </>
            )}
        </div>
    ) : (
        <>
            <Link to="/login" className="UserPage">Please login to continue</Link>
        </>
    )

    return (
        <>
            {page}
        </>
    )
}
