import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { AboutAsync } from "./components/About.async";
import { MainAsync } from "./components/Main.async";
import { classNames } from "./helpers/classNames";
import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";

export default function App() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames("app", { hovered: true }, [theme])}>
            <button onClick={toggleTheme}>change theme</button>
            <Link to={"/"}>Main</Link>
            <Link to={"/about"}>About</Link>

            <Suspense fallback={<div>loading...</div>}>
                <Routes>
                    <Route path={"/about"} element={<AboutAsync />} />
                    <Route path={"/"} element={<MainAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
}
