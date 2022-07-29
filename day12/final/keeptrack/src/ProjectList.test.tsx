import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import { MOCK_PROJECTS } from "./MockProjects";
import ProjectList from "./ProjectList";
import { store } from "./state";
import React from "react"
import { screen } from "@testing-library/dom";
import userEvent from '@testing-library/user-event';
import { QueryClient, QueryClientProvider } from "react-query";
import { render } from "@testing-library/react";


describe("<ProjectList/>", () => {
    const queryClient = new QueryClient()
    const setup = () =>
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <QueryClientProvider client={queryClient}>
                        <ProjectList project={MOCK_PROJECTS} />
                    </QueryClientProvider>
                </MemoryRouter>
            </Provider>
        )
    beforeEach(() => { });
    test("should render without crashing", () => {
        expect(screen).toBeDefined();
    })
    test("should display list", () => {
        setup();
        expect(screen.getAllByRole("heading")).toHaveLength(MOCK_PROJECTS.length)
        expect(screen.getAllByRole("img")).toHaveLength(MOCK_PROJECTS.length)
        expect(screen.getAllByRole("link")).toHaveLength(MOCK_PROJECTS.length)
        expect(screen.getAllByRole("button")).toHaveLength(MOCK_PROJECTS.length)
    })
    test("should display form when edit clicked", async() => {
        setup();
        const user=userEvent.setup();
        await user.click(screen.getByRole("button" ,{name:/edit Wisozk Group/i }))
        expect(screen.getByRole("form",{name: /edit a project/i})).toBeInTheDocument()
    })
    test("should display image and remove form when cancel clicked", async() => {
        setup();
        const user=userEvent.setup();
        await user.click(screen.getByRole("button" ,{name:/edit Wisozk Group/i }))
        await user.click(screen.getByRole("button" ,{name:/cancel/i }))
        expect(screen.getByRole("img",{name: /Wisozk Group/i})).toBeInTheDocument()
        expect(screen.queryByRole("form",{name: /edit a project/i})).not.toBeInTheDocument()
    })
})
