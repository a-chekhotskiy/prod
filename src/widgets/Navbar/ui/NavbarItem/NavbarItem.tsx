// import cls from 'NavbarItem.module.scss';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';

interface NavbarItemProps {
    path: string;
    text: string;
    icon?: any;
}

export const NavbarItem: React.FC<NavbarItemProps> = memo(({ path, text }) => {
    const { t: translate } = useTranslation();

    return (
        <AppLink theme={AppLinkTheme.PRIMARY} to={path}>
            {translate(text)}
        </AppLink>
    );
});
