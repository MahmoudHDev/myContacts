import React from "react";

export default function contacts(props) {

    return <div>
        <h1>Name: {props.name}</h1>
        <p>Phone Number: {props.phone}</p>
        <p>username: {props.username}</p>
        <p>website: {props.website}</p>
    </div>


}