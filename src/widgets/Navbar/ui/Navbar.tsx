import { Link } from "react-router-dom";
import cls from "./Navbar.module.scss";
import { classNames } from "helpers/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={classNames(cls.links, {}, [])}>
                <AppLink
                    theme={AppLinkTheme.PRIMARY}
                    to={"/"}
                    className={classNames(cls.mainLink, {}, [])}
                >
                    Main
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.PRIMARY}
                    to={"/about"}
                    className={classNames(cls.mainLink, {}, [])}
                >
                    About
                </AppLink>
            </div>
        </div>
    );
};
