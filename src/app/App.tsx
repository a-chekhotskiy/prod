import { Link } from "react-router-dom";
import { AppRouter } from "app/providers/Router/ui/AppRouter";
import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { Navbar } from "widgets/Navbar/ui/";
import { ThemeSwitcher } from "widgets/ThemeSwitcher/ui";

export default function App() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <ThemeSwitcher className="" />
            <Navbar />
            <AppRouter />
        </div>
    );
}
