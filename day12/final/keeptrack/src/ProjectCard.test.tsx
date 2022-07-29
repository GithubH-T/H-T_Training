import { screen } from "@testing-library/dom";
import { MemoryRouter } from "react-router";
import { Project } from "./project"
import ProjectCard from "./ProjectCard";
import renderer from 'react-test-renderer';
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "react-query";
import { render } from "@testing-library/react";

describe("<PC/>", () => {
    let project: Project
    let handleEdit: jest.Mock;
    const queryClient = new QueryClient()
    // Refactor the ProjectCard-test.tsx to use use a setup function to render the component at the start of each test.
    const setup = () => {
        render(
            <MemoryRouter>
                <QueryClientProvider client={queryClient}>
                    <ProjectCard project={project} onEdit={handleEdit} />
                </QueryClientProvider>
            </MemoryRouter>
        );
    }

    beforeEach(() => {
        project = new Project({
            id: 1,
            name: "Mission Impossible",
            description: "This is really difficult",
            budget: 100,
        })
        handleEdit = jest.fn();
    })
    it("should initially render", () => {
        setup();
    })
    it("renders project properly", () => {
        setup();
        // expect(screen.getByRole("heading")).toHaveTextContent(project.name);
        const abc = screen.getByRole("heading");
        expect(abc).toHaveTextContent(project.name);
        screen.getByText(/this is really difficult\.\.\./i);
        screen.getByText(/100/);
    })
    it("handler called when edit clicked", async () => {
        setup();
        const user = userEvent.setup();
        await user.click(screen.getByRole("button", { name: /edit/i }));
        expect(handleEdit).toBeCalledTimes(1);
        expect(handleEdit).toBeCalledWith(project)
    })
    test("snapshot", () => {
        const tree = renderer.create(
            <MemoryRouter>
                <ProjectCard project={project} onEdit={handleEdit} />
            </MemoryRouter>
            // here I have not used queryselector how it is working ffine here check it!! and check queryclient concept as well under lab 27
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
})