import { classNames } from 'helpers/classnames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        theme = ThemeButton.CLEAR, className, children, ...otherProps
    } = props;

    return (
        <button type="button" className={classNames(cls.btn, {}, [cls[theme]])} {...otherProps}>
            {children}
        </button>
    );
};
