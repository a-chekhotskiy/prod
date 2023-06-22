import { classNames } from 'helpers/classnames/classNames';

import { Loader } from 'shared/ui/Loader';
import cls from './PageLoader.module.scss';

export const PageLoader: React.FC = () => {
  return (
    <div className={classNames(cls.pageLoader)}>
      <Loader />
    </div>
  );
};
