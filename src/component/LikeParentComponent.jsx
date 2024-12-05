import React from "react";
import { useState } from "react";   
import LikeComponent from "./LikeComponenet";

const LikeParentComponent = () => {
    const [value, setValue] = useState(0);
    
    const increment = ()  => {
        setValue(value + 1);
    }

    const reset = () => {
        setValue(0);
    }

    return (
        <div class="like">
            <LikeComponent
                value = {value}
                increment = {increment}
                reset = {reset}
            />
        </div>
    );
};

export default LikeParentComponent;