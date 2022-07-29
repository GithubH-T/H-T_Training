import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import { Project } from "./project";
import ProjectForm from "./ProjectForm";
import { store } from "./state";
// import { QueryClient, QueryClientProvider } from "react-query";

describe("<ProjectForm />", () => {
    let project: Project;
    let updatedProject: Project;
    let handleCancel: jest.Mock;
    let nameTextBox: any;
    let descriptionTextBox: HTMLElement;
    let budgetTextBox: HTMLElement;

    // const queryClient = new QueryClient()
    const setup = () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    {/* <QueryClientProvider client={queryClient}> */}
                    <ProjectForm project={project} onCancel={handleCancel} />
                    {/* </QueryClientProvider> */}
                </MemoryRouter>
            </Provider>
        );

        nameTextBox = screen.getByRole("textbox", {
            name: /project name/i,
        });
        descriptionTextBox = screen.getByRole("textbox", {
            name: /project description/i,
        });
        budgetTextBox = screen.getByRole("spinbutton", {
            name: /project budget/i,
        });
    };

    beforeEach(() => {
        project = new Project({
            id: 1,
            name: "Mission Impossible",
            description: "This is really difficult",
            budget: 100,
        });
        updatedProject = new Project({
            name: "Ghost Protocol",
            description:
                "Blamed for a terrorist attack on the Kremlin, Ethan Hunt (Tom Cruise) and the entire IMF agency...",
        });
        handleCancel = jest.fn();
    });

    test("should load project into form", () => {
        setup();
        expect(
            screen.getByRole("form", {
                name: /edit a project/i,
            })
        ).toHaveFormValues({
            name: project.name,
            description: project.description,
            budget: project.budget,
            isActive: project.isActive,
        });
    });
    test("should accept input", async () => {
        setup();
        const user = userEvent.setup();

        await user.clear(nameTextBox);
        await user.type(nameTextBox, updatedProject.name);
        expect(nameTextBox).toHaveValue(updatedProject.name);

        await user.clear(descriptionTextBox);
        await user.type(descriptionTextBox, updatedProject.description);
        expect(descriptionTextBox).toHaveValue(updatedProject.description);

        await user.clear(budgetTextBox);
        await user.type(budgetTextBox, updatedProject.budget.toString());
        expect(budgetTextBox).toHaveValue(updatedProject.budget);
    });
    test("name should display required validation", async () => {
        setup();
        const user = userEvent.setup();
        await user.clear(nameTextBox);
        expect(screen.getByRole('alert')).toBeInTheDocument();
    });
    test('name should display minlength validation', async () => {
        setup();
        const user = userEvent.setup();
        await user.clear(nameTextBox);
        await user.type(nameTextBox, 'ab');
        await expect(screen.getByRole('alert')).toBeInTheDocument();
        await user.type(nameTextBox, 'c');
        expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    });

    test('budget should display not 0 validation', async () => {
        setup();
        const user = userEvent.setup();
        await user.clear(budgetTextBox);
        await user.type(budgetTextBox, '0');
        expect(screen.getByRole('alert')).toBeInTheDocument();
        await user.type(budgetTextBox, '1');
        expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    });
});