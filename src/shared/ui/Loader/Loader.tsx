import { classNames } from 'helpers/classnames/classNames';
import cls from './Loader.module.scss';

export const Loader: React.FC = () => {
  return (
    <div className={classNames(cls.loader, {}, [])}>
      <div>LORERERERERER</div>
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
