import { useTranslation } from 'react-i18next';
import { classNames } from 'helpers/classNames';
import { Button, ThemeButton } from '../../shared/ui/Button';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <Button
                className={classNames(cls.LangSwitcher, {}, [className])}
                theme={ThemeButton.CLEAR}
                onClick={() => i18n.changeLanguage(
                    i18n.language === 'en-US' ? 'ru' : 'en-US',
                )}
            >
                {t('change language')}
            </Button>
            {t('test')}
        </>
    );
};
