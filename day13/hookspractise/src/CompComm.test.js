import { render,screen,fireEvent } from "@testing-library/react";
import Parent from "./App";

test ("test1",() => {
    render(<Parent/>);
    const child=screen.getByTestId("childBtn");
    //console.log(parent);
    const pTag = screen.getByTestId("message");
    fireEvent.click(child);
    expect(pTag).toHaveTextContent("No");
})