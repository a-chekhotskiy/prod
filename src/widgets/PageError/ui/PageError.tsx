import { useTranslation } from 'react-i18next';

export const PageError: React.FC = () => {
  const { t: translate } = useTranslation('pageError');

  const onReload = () => {
    window.location.reload();
  };

  return (
    <>
      <div>{translate('errorText')}</div>
      <button onClick={onReload}>{translate('errorButton')}</button>
    </>
  );
};