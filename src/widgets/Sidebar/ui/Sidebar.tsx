import { classNames } from 'helpers/classnames/classNames';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal';
import { Button, ThemeButton } from 'shared/ui/Button';
import cls from './Sidebar.module.scss';
import { Counter } from 'entities/Counter';

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
            <Modal open={open} onClosed={onModalClosed}>
                {t('modal text')}
            </Modal>
            <Counter />
        </div>
    );
};
