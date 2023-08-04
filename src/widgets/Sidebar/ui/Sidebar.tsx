import { classNames } from 'helpers/classnames/classNames';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthState } from 'entities/User/model/selectors/getUserState';
import { userActions } from 'entities/User/model/slice/userSlice';
import { AuthModal } from 'features/AuthForm';
import cls from './Sidebar.module.scss';

interface SibebarProps {
    className?: string;
}

export const Sidebar: React.FC<SibebarProps> = ({ className, ...otherProps }) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);

    const { t } = useTranslation();

    const authData = useSelector(getUserAuthState);
    const dispatch = useDispatch();

    const onToggle = () => setCollapsed((prevState) => !prevState);

    const onModalClosed = () => {
        setOpen(false);
    };

    const onModalOpen = () => {
        setOpen(true);
    };

    const onLogoutClick = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    useEffect(() => {
        if (authData) onModalClosed();
    }, [authData]);

    return (
        <div className={classNames(cls.sidebar, { [cls.opened]: collapsed }, [className])} {...otherProps}>
            <button type="button" data-testid="toggleButton" onClick={onToggle}>
                {t('hide sidebar')}
            </button>

            {authData ? (
                <Button onClick={onLogoutClick} theme={ThemeButton.OUTLINE}>
                    {t('logout')}
                </Button>
            ) : (
                <Button onClick={onModalOpen} theme={ThemeButton.OUTLINE}>
                    {t('login')}
                </Button>
            )}

            {open && <AuthModal open={open} onClosed={onModalClosed} />}
        </div>
    );
};
