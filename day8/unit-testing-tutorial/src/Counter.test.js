import { render,screen,fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("increment counter", () => {
    render(<Counter/>);
    const counter = screen.getByTestId("counter");
    const incrementBtn = screen.getByTestId("increment");
    fireEvent.click(incrementBtn);

    expect(counter).toHaveTextContent("1");
    fireEvent.click(incrementBtn);

    expect(counter).toHaveTextContent("2");
    //console.log(counter);
});

test("decrement counter", () => {
    render(<Counter/>);
    const counter = screen.getByTestId("counter");
    const decrementBtn = screen.getByTestId("decrement");
    fireEvent.click(decrementBtn);

    expect(counter).toHaveTextContent("-1");
});

test("reset counter", () => {
    render(<Counter/>);
    const counter = screen.getByTestId("counter");
    const resetBtn = screen.getByTestId("reset");
    fireEvent.click(resetBtn);

    expect(counter).toHaveTextContent("0");
});
   




// test("second test case",function () {
//     console.log("second test");
// })