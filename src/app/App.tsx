import { AppRouter } from "app/providers/Router/ui/AppRouter";
import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { Navbar } from "widgets/Navbar/ui/";
import { ThemeSwitcher } from "widgets/ThemeSwitcher/ui";
import { Sidebar } from "widgets/Sidebar";
import { classNames } from "helpers/classNames";

export default function App() {
    const { theme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <ThemeSwitcher className="" />
            <Navbar />
            <div className="appContainer">
                <Sidebar />
                <div className="pageContainer">
                    <AppRouter />
                </div>
            </div>
        </div>
    );
}
