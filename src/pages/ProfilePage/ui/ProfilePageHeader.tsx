import { classNames } from 'helpers/classnames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';

import { Button, ThemeButton } from 'shared/ui/Button';

import { useDispatch, useSelector } from 'react-redux';
import { getProfileReadOnly } from 'entities/Profile/model/selectors/getProfileReadOnly';
import { profileActions } from 'entities/Profile';
import { updateProfileData } from 'entities/Profile/model/services/updateProfileData/updateProfileData';
import cls from './ProfilePageHeader.module.scss';

interface ProfileHeaderProps {
    className?: string;
}

export const ProfilePageHeader: React.FC<ProfileHeaderProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const readonly = useSelector(getProfileReadOnly);

    const onEdit = () => {
        dispatch(profileActions.setReadonly(false));
    };

    const onCancelEdit = () => {
        dispatch(profileActions.cancelEdit());
    };

    const onSave = () => {
        dispatch(updateProfileData());
    };

    return (
        <div className={classNames(cls.profileHeader, {}, [className])}>
            <div className={classNames(cls.profileHeader)}>
                <Text title={t('Profile')} />
                {readonly ? (
                    <Button className={cls.editButton} theme={ThemeButton.OUTLINE} onClick={onEdit}>
                        <Text title={t('Edit')} />
                    </Button>
                ) : (
                    <>
                        <Button className={cls.editButton} theme={ThemeButton.OUTLINE} onClick={onCancelEdit}>
                            <Text title={t('Cancel')} />
                        </Button>
                        <Button className={cls.editButton} theme={ThemeButton.OUTLINE} onClick={onSave}>
                            <Text title={t('Save')} />
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
};
