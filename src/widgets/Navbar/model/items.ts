import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export type NavbarItemType = {
    path: string;
    text: string;
};

export const navbarItemsList: NavbarItemType[] = [
    {
        path: RoutePath.main,
        text: 'Main',
    },
    {
        path: RoutePath.about,
        text: 'About',
    },
    {
        path: RoutePath.profile,
        text: 'Profile',
    },
];
