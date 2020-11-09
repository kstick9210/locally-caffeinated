import React from "react";

import "./UserPage.css"

export default function UserPage({user}) {
    return (
        <div className="UserPage">
            {user.name}
        </div>
    )
}
