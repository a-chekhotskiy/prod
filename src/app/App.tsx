import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { AppRouter } from "app/providers/Router/ui/AppRouter";
import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider";

export default function App() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>change theme</button>
            <Link to={"/"}>Main</Link>
            <Link to={"/about"}>About</Link>
            <AppRouter />
        </div>
    );
}
