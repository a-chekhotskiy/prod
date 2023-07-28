import { classNames } from 'helpers/classnames';
import cls from './Input.module.scss';

interface InputProps {
    className?: string;
    type?: string;
    value?: string;
    onInputchange?: () => void;
    placeholder?: string;
}

export const Input: React.FC<InputProps> = (props) => {
    const { className, type, value, onInputchange, placeholder, ...otherProps } = props;

    return (
        <div className={classNames(cls.input, {}, [className])} {...otherProps}>
            <input type={type} value={value} onChange={onInputchange} placeholder={placeholder} />
        </div>
    );
};
