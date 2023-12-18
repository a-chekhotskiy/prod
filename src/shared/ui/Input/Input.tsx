import { ChangeEvent } from 'react';
import { classNames } from 'helpers/classnames';
import cls from './Input.module.scss';

interface InputProps {
    value?: string | number;
    onInputchange: (val: string) => void;
    className?: string;
    type?: string;
    placeholder?: string;
    readonly?: boolean;
}

export const Input: React.FC<InputProps> = (props) => {
    const { className, type, value, onInputchange, placeholder, readonly, ...otherProps } = props;

    const onChange = (val: ChangeEvent<HTMLInputElement>) => {
        onInputchange(val.target.value);
    };

    return (
        <div className={classNames(cls.input, {}, [className])} {...otherProps}>
            <input type={type} value={value} onChange={onChange} placeholder={placeholder} readOnly={readonly} />
        </div>
    );
};
