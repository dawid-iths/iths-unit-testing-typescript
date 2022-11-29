import { render, fireEvent, screen } from "@testing-library/react";
import CounterComponent from "../../components/Counter/CounterComponent";

describe("Counter Component", () => {
    test("increments counter", () => {
        
        //arrange
        render(<CounterComponent />);
        
        const counter = screen.getByTestId("counter");
        const incrementBtn = screen.getByTestId("increment");

        //act
        fireEvent.click(incrementBtn);

        //assert
        expect(counter).toHaveTextContent("1");
    });

    test("decrement counter", () => {
        
        //arrange
        render(<CounterComponent />);
        
        const counter = screen.getByTestId("counter");
        const btn = screen.getByTestId("decrement");

        //act
        fireEvent.click(btn);

        //assert
        expect(counter).toHaveTextContent("-1");
    });
});