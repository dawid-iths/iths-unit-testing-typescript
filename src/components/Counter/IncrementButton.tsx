import React, { useState } from "react";

interface IncrementButtonProps {
    incrementCounter: () => void;
    btnText: string;
}

const IncrementButton: React.FC<IncrementButtonProps> = (props) => {
    return (
    <>
    <button data-testid="increment" onClick={props.incrementCounter}>
        {props.btnText}
    </button>
    </>
    );
};

export default IncrementButton;