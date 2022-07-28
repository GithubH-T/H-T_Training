import { render, screen } from "@testing-library/react"
import { createRenderer } from "react-dom/test-utils"
import HomePage from "./HomePage"
import renderer from 'react-test-renderer';

//Test suite-
//Test cases-
test("renders from heading", () => {
    render(<HomePage/>)
    expect(screen.getByText("Home")).toHaveTextContent("Home")
})
test("renders from heading", () => {
    render(<HomePage/>)
    expect(screen.getByRole("heading")).toHaveTextContent("Home")
})

//Add a snapshot test for the component. Organize the tests in a suite (describe function). Describe function- Missing second argument. It must be a callback function.

describe("<HPage/>",() => {
    test("should render w/o crashing", () => {
        render(<HomePage/>)
    })
    test("snapshot",()=> {
        const tree=renderer.create(<HomePage/>).toJSON();
        expect(tree).toMatchSnapshot()
    })
})