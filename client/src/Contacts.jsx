import React from "react";

export default function contacts(props) {

    return <div className="card px-4 py-4 my-4 mx-auto ">
        <h2 className="card-title"> <span style={{color: "black"}}>Name:</span> {props.name}</h2>
        <p className="card-text">Phone Number: {props.phone}</p>
        <p className="card-text">Username: {props.username}</p>
        <p className="card-text">Website: <a href={props.website}>{props.website}</a></p>
    </div>


}

