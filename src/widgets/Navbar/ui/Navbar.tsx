import { classNames } from 'helpers/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => (
    <div className={classNames(cls.navbar, {}, [className])}>
        <div className={classNames(cls.links, {}, [])}>
            <AppLink
                theme={AppLinkTheme.PRIMARY}
                to="/"
                className={classNames(cls.mainLink, {}, [])}
            >
                Main
            </AppLink>
            <AppLink
                theme={AppLinkTheme.PRIMARY}
                to="/about"
                className={classNames(cls.mainLink, {}, [])}
            >
                About
            </AppLink>
        </div>
    </div>
);
