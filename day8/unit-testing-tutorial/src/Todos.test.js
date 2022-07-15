import { waitFor, render, screen } from "@testing-library/react";
import axios from "axios";
import Todos from "./Todos";


const dummyTodos = [
    {
    userId: 1,
    id: 1,
    title: "todo 1",
    completed: false,
    },
    {
    userId: 1,
    id: 2,
    title: "todo 2",
    completed: false,
    },
    {
    userId: 1,
    id: 3,
    title: "todo 3",
    completed: false,
    },
];

jest.mock('axios');         //mocking is the dummy response made whenever an ajax call is there
test('testing Todos', async () => {
    axios.get.mockResolvedValue({ data: dummyTodos });
    render(<Todos/>);
    const todoList = await waitFor(() => screen.findAllByTestId("todo"));

    expect(todoList).toHaveLength(3);
})