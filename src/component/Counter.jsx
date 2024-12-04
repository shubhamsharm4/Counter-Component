import React from "react";

const Counter = (props) => {
    return (
        <div className="Counter">
            <h1>Counter: {props.value}</h1>
            <button onClick={props.reset}>Reset</button> 
            <button onClick={props.increment}>Increment</button> 
            <button onClick={props.decrement}>Decrement</button> 
        </div>
    );
};

export default Counter;
