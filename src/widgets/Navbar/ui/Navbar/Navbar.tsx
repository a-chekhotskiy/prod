import { classNames } from 'helpers/classnames/classNames';
import { navbarItemsList } from 'widgets/Navbar/model/items';
import cls from './Navbar.module.scss';
import { NavbarItem } from '../NavbarItem/NavbarItem';

interface NavbarProps {
    className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => (
    <div className={classNames(cls.navbar, {}, [className])}>
        <div className={classNames(cls.links, {}, [])}>
            {navbarItemsList.map((item) => (
                <NavbarItem key={item.path} path={item.path} text={item.text} />
            ))}
        </div>
    </div>
);
