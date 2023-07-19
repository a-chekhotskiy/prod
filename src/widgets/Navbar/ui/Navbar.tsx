import { classNames } from 'helpers/classnames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
    const { t: translate } = useTranslation('pageError');

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={classNames(cls.links, {}, [])}>
                <AppLink theme={AppLinkTheme.PRIMARY} to="/" className={classNames(cls.mainLink, {}, [])}>
                    {translate('errorText')}
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.PRIMARY}
                    to="/about"
                    className={classNames(cls.mainLink, {}, [])}
                >
                    {translate('errorText')}
                </AppLink>
            </div>
        </div>
    );
};
