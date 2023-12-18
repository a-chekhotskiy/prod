import { classNames } from 'helpers/classnames';
import { Text } from 'shared/ui/Text';
import { Button, ThemeButton } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input';

import { Profile } from 'entities/Profile/model/types/ProfileSchema';
import { COUNTRY } from 'shared/constants/types';
import { Loader } from 'shared/ui/Loader';
import { TextAlign, TextTheme } from 'shared/ui/Text/Text';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstName: (value?: string) => void;
    onChangeLastName: (value?: string) => void;
    onChangeAge: (value?: string) => void;
    onChangeCountry: (value?: string) => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = (props) => {
    const { className, data, isLoading, error, readonly, onChangeFirstName, onChangeLastName, onChangeAge, onChangeCountry } = props;

    const { t: translate } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.profileCard, { [cls.loading]: true }, [className])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.profileCard, { [cls.loading]: true }, [className])}>
                <Text title={translate('Error occured')} text={translate('Error occured')} theme={TextTheme.ERROR} align={TextAlign.CENTER} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.profileCard, {}, [])}>
            <div className={cls.profileData}>
                <div className={classNames(cls.avatar, {}, [className])} style={{ backgroundImage: `url(${data?.avatar})` }} />
                <Input
                    value={data?.firstname}
                    placeholder={translate('Your first name')}
                    className={cls.input}
                    onInputchange={onChangeFirstName}
                    readonly={readonly}
                />
                <Input
                    value={data?.lastname}
                    placeholder={translate('Your last name')}
                    className={cls.input}
                    onInputchange={onChangeLastName}
                    readonly={readonly}
                />
                <Input value={data?.age} placeholder={translate('Your age')} className={cls.input} onInputchange={onChangeAge} readonly={readonly} />
                <Input
                    value={data?.country}
                    placeholder={translate('Your country')}
                    className={cls.input}
                    onInputchange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
