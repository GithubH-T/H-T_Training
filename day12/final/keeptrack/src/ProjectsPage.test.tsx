import { render } from "@testing-library/react"
import { QueryClient, QueryClientProvider } from "react-query"
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router"
import ProjectsPage from "./ProjectsPage"
import { store } from "./state"
import { screen, waitForElementToBeRemoved } from "@testing-library/dom";
import { MOCK_PROJECTS } from "./MockProjects"
import { rest } from "msw"
import { url } from "./ProjectApi"
import { setupServer } from 'msw/node';

const server = setupServer(
    rest.get(url, (req, res, ctx) => {
        return res(ctx.json(MOCK_PROJECTS));
    })
)
describe("<ProjectsPage/>", () => {
    // const queryClient = new QueryClient()
    // const setup = () =>
    function renderComponent() {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    {/* <QueryClientProvider client={queryClient}> */}
                    <ProjectsPage />
                    {/* </QueryClientProvider> */}
                </MemoryRouter>
            </Provider>
        )
    }

    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    test("should render without crashing", () => {
        renderComponent();
        expect(screen).toBeDefined();
    });
    test('should display loading', () => {
        renderComponent();
        expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });
    xtest('should display projects', async () => {//lab5
        renderComponent();
        expect( await screen.findAllByRole("img")).toHaveLength(MOCK_PROJECTS.length)
    });
    xtest('should display more button', async () => {
        renderComponent();
        expect(await screen.findByRole("button", { name: /more/i })).toBeInTheDocument();
    });
    xtest('should display more button with get', async () => {
        renderComponent();
        await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));
        expect(screen.getByRole("button", { name: /more/i })).toBeInTheDocument();
    });
    test('should display custom error on server error', async () => {
        server.use(
            rest.get(url, (req, res, ctx) => {
                return res(ctx.status(500, 'Server error'));
            })
        );
        renderComponent();

        expect(
            await screen.findByText(/There was an error retrieving the project(s)./i)
        ).toBeInTheDocument();
    });
})