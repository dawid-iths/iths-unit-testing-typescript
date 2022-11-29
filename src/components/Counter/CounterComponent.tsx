import { useState } from "react";
import DecremenButton from "./DecrementButton";
import IncrementButton from "./IncrementButton";

const CounterComponent = () => {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
    };

    const decrementCounter = () => {
    setCounter((prevCounter) => prevCounter - 1);
    };

    return (
    <>
        <IncrementButton 
        incrementCounter={incrementCounter}
        btnText="+"
        />
        
        <p data-testid="counter">{counter}</p>

        <DecremenButton
        decrementCounter={decrementCounter}
        btnText="-"
        />

    </>
    );
};

export default CounterComponent;