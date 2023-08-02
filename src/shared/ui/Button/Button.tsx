import { Modes, classNames } from 'helpers/classnames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    disabled?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
    const { theme = ThemeButton.CLEAR, className, children, disabled, ...otherProps } = props;

    const mods: Modes = {
        [cls[theme]]: true,
        [cls.disabled]: disabled,
    };

    return (
        <button type="button" className={classNames(cls.btn, mods, [className])} {...otherProps}>
            {children}
        </button>
    );
};
