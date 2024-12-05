import React from "react";
import { useState } from "react";

const LikeComponent = (props) => {
    return (
        <div>
            <h1>LIKES: {props.value}</h1>
            <button onClick={props.increment}>LIKE ME!!</button>
            <button onClick={props.reset}>RESET ME!!</button>
        </div>
    );
}

export default LikeComponent;