import { classNames } from 'helpers/classNames';
import cls from './Loader.module.scss';

export const Loader: React.FC = () => {
  return (
    <div className={classNames(cls.loader, {}, [])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
