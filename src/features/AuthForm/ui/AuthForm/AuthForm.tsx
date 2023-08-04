import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { classNames } from 'helpers/classnames';
import { Button, ThemeButton } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text';
import { Input } from 'shared/ui/Input';
import { TextTheme } from 'shared/ui/Text/Text';

import { StateSchema } from 'app/providers/StoreProvider/StateSchema';
import { useReducerLoader } from 'shared/lib/hooks/useReducerLoader';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginThunk } from '../../model/thunks/loginThunk/loginThunk';

import cls from './AuthForm.module.scss';

export interface AuthFormProps {
    className?: string;
}

const reducersList = {
    login: loginReducer,
};

const AuthForm: React.FC<AuthFormProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const { addReducer, removeReducer } = useReducerLoader(reducersList);

    useEffect(() => {
        addReducer();
        return () => {
            removeReducer();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // const { username, password, error, isLoading } = useSelector(getLoginState);
    const username = useSelector((state: StateSchema) => state?.login?.username ?? '');
    const password = useSelector((state: StateSchema) => state?.login?.password ?? '');
    const error = useSelector((state: StateSchema) => state?.login?.error ?? '');
    const isLoading = useSelector((state: StateSchema) => state?.login?.isLoading ?? false);

    const onUsernameChange = useCallback(
        (val: string) => {
            dispatch(loginActions.setUsername(val));
        },
        [dispatch],
    );

    const onPasswordChange = useCallback(
        (val: string) => {
            dispatch(loginActions.setPassword(val));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(() => {
        dispatch(loginThunk({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={classNames(cls.authForm, {}, [className])}>
            <Text title={t('login form')} />
            {error && <Text text={error} theme={TextTheme.ERROR} />}
            <Input type="text" className={cls.input} placeholder={t('enter your username')} onInputchange={onUsernameChange} value={username} />
            <Input type="text" className={cls.input} placeholder={t('enter your password')} onInputchange={onPasswordChange} value={password} />
            <Button className={cls.button} theme={ThemeButton.OUTLINE} onClick={onLoginClick} disabled={isLoading}>
                {t('login')}
            </Button>
        </div>
    );
};

export default AuthForm;
