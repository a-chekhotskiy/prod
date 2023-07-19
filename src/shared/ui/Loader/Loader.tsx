import { classNames } from 'helpers/classnames/classNames';
import cls from './Loader.module.scss';

export const Loader: React.FC = () => (
    <div className={classNames(cls.loader, {}, [])}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
    </div>
);
