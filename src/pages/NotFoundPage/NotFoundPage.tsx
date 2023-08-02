// import { classNames } from 'helpers/classnames/classNames';
import { useTranslation } from 'react-i18next';
// import cls from './NotFoundPage.module.scss';

export const NotFoundPage: React.FC = () => {
    const { t: translate } = useTranslation();
    return <div>{translate('notFound')}</div>;
};
