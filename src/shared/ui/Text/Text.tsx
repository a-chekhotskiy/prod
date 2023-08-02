import { classNames } from 'helpers/classnames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    ERROR = 'error',
    PRIMARY = 'primary',
}

interface TextProps {
    title?: string;
    text?: string;
    classname?: string;
    theme?: TextTheme;
}

export const Text: React.FC<TextProps> = (props) => {
    const { title, text, classname, theme = TextTheme.PRIMARY, ...otherProps } = props;
    console.log(theme);

    console.log(cls[theme]);

    return (
        <div className={classNames(cls.Text, { [cls[theme]]: true }, [classname])} {...otherProps}>
            {title && <p className={classNames(cls.title)}>{title}</p>}
            {text && <p className={classNames(cls.text)}>{text}</p>}
        </div>
    );
};
