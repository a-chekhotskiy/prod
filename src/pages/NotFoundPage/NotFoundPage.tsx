import { classNames } from 'helpers/classnames/classNames';
import cls from './NotFoundPage.module.scss';
import { useTranslation } from 'react-i18next';

export const NotFoundPage: React.FC = () => {
  const { t: translate } = useTranslation('notFound');
  return <div className={classNames(cls.notFoundPage)}>{translate('notFound')}</div>;
};
