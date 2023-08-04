import { FC, lazy } from 'react';
import { AuthFormProps } from './AuthForm';

export const AuthFormAsync = lazy<FC<AuthFormProps>>(
    () =>
        // eslint-disable-next-line implicit-arrow-linebreak
        new Promise((resolve) => {
            // @ts-ignore
            setTimeout(() => resolve(import('./AuthForm')), 1500);
        }),
);
