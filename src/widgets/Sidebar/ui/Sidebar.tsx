import { classNames } from 'helpers/classnames/classNames';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button';
import { Counter } from 'entities/Counter';
import { AuthModal } from 'features/AuthForm';
import cls from './Sidebar.module.scss';

interface SibebarProps {
    className?: string;
}

export const Sidebar: React.FC<SibebarProps> = ({ className, ...otherProps }) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const { t } = useTranslation('sidebar');

    const onToggle = () => setCollapsed((prevState) => !prevState);

    const onModalClosed = () => {
        setOpen(false);
    };

    const onModalOpen = () => {
        setOpen(true);
    };

    return (
        <div className={classNames(cls.sidebar, { [cls.opened]: collapsed }, [className])} {...otherProps}>
            <button type="button" data-testid="toggleButton" onClick={onToggle}>
                {t('hide sidebar')}
            </button>

            <Button onClick={onModalOpen} theme={ThemeButton.OUTLINE}>
                {t('modal button')}
            </Button>
            <AuthModal open={open} onClosed={onModalClosed} />
            {/* <Counter /> */}
        </div>
    );
};
