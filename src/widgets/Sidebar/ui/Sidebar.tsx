import cls from "./Sidebar.module.scss";
import { classNames } from "helpers/classNames";
import { useState } from "react";

interface SibevarProps {
    className?: string;
}

export const Sidebar: React.FC<SibevarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState<boolean>(true);

    const onToggle = () => setCollapsed((prevState) => !prevState);

    return (
        <div
            className={classNames(cls.sidebar, { [cls.opened]: collapsed }, [
                className,
            ])}
        >
            <button onClick={onToggle}>click</button>
        </div>
    );
};
