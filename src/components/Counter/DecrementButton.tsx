import React from "react";

interface DecrementButtonProps {
    decrementCounter: () => void;
    btnText: string;
}

const DecremenButton: React.FC<DecrementButtonProps> = (props) => {
    return (
        <>
            <button data-testid="decrement" onClick={props.decrementCounter}>
                {props.btnText}
            </button>
        </>
    );
};

export default DecremenButton;