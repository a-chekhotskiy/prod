import { CSSProperties, memo, useMemo } from 'react';
import { Modes, classNames } from 'helpers/classnames/classNames';
import cls from './Avatar.module.scss';

interface TextProps {
    classname?: string;
    url?: string;
    alt?: string;
    size?: number;
}

export const Avatar: React.FC<TextProps> = memo((props) => {
    const { classname, url, alt = '', size = 100, ...otherProps } = props;

    const mods: Modes = {};

    const styles = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
            backgroundImage: `url(${url})`,
        }),
        [size, url],
    );

    return <img className={classNames(cls.avatar, mods, [classname])} alt={alt} style={styles} {...otherProps} />;
});
