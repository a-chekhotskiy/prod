import { classNames } from 'helpers/classNames';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

interface SibevarProps {
    className?: string;
}

export const Sidebar: React.FC<SibevarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const { t } = useTranslation('sidebar');

    const onToggle = () => setCollapsed((prevState) => !prevState);

    return (
        <div
            className={classNames(cls.sidebar, { [cls.opened]: collapsed }, [
                className,
            ])}
        >
            <button onClick={onToggle}>{t('hide sidebar')}</button>
        </div>
    );
};
