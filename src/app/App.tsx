import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useTheme } from "./providers/ThemeProvider";
import "./styles/index.scss";

export default function App() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>change theme</button>
            <Link to={"/"}>Main</Link>
            <Link to={"/about"}>About</Link>

            <Suspense fallback={<div>loading...</div>}>
                <Routes>
                    <Route path={"/about"} element={<AboutPage />} />
                    <Route path={"/"} element={<MainAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
}
