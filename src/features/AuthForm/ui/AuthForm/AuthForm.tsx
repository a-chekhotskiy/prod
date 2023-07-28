import { classNames } from 'helpers/classnames';
import { Button, ThemeButton } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { useTranslation } from 'react-i18next';
import cls from './AuthForm.module.scss';

interface AuthFormProps {
    className?: string;
}

export const AuthForm: React.FC<AuthFormProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.authForm, {}, [className])}>
            <Input type="text" className={cls.input} placeholder={t('Enter your username')} />
            <Input type="text" className={cls.input} placeholder={t('Enter your password')} />
            <Button className={cls.button} theme={ThemeButton.OUTLINE}>
                {t('Login')}
            </Button>
        </div>
    );
};
