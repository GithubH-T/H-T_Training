const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee",
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222",
    },
};
const ThemeContext = React.createContext(themes.light);

function App() {
    const [themeName, setThemeName] = React.useState("light");
    const currentTheme = themes(themeName);
    return (
        <>
            <select onChange={(event) => setThemeName(event.target.value)} value={themeName}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>

            <ThemeContext.Provider value={currentTheme}>
                <Toolbar />
            </ThemeContext.Provider>
        </>
    );
}

function Toolbar({ theme }) {
    return (
        <div>
            <ThemeButton theme={theme} />
        </div>
    );
}

function ThemeButton({ theme }) {
    const { background, foreground } = React.useContext(ThemeContext);
    return (
        <button style={{ backgroundColor: background, color: foreground }}>
            Click me!
        </button>
    );
}

export default App;