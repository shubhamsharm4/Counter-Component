import React, { useState } from "react";
import Counter from "./Counter";

const CounterControl = () => {
    const [value, setValue] = useState(0);

    const Reset = () => {
        setValue(0); 
    };

    const Increment = () => {
        setValue(value + 1);
    };

    const Decrement = () => {
        setValue(value - 1);
    };

    return (
        <div>
            <Counter
                value={value} 
                reset={Reset} 
                increment={Increment} 
                decrement={Decrement} 
            />
        </div>
    );
};

export default CounterControl;
