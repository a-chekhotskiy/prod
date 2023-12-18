import { memo } from 'react';
import { Modes, classNames } from 'helpers/classnames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    ERROR = 'error',
    PRIMARY = 'primary',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

interface TextProps {
    title?: string;
    text?: string;
    classname?: string;
    theme?: TextTheme;
    align?: TextAlign;
}

export const Text: React.FC<TextProps> = memo((props) => {
    const { title, text, classname, theme = TextTheme.PRIMARY, align = TextAlign.LEFT, ...otherProps } = props;

    const mods: Modes = {
        [cls[theme]]: true,
        [cls[align]]: true,
    };

    return (
        <div className={classNames(cls.text, mods, [classname])} {...otherProps}>
            {title && <p className={classNames(cls.title)}>{title}</p>}
            {text && <p className={classNames(cls.text)}>{text}</p>}
        </div>
    );
});
