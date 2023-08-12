import { classNames } from 'helpers/classnames';
import { Text } from 'shared/ui/Text';
import { Button, ThemeButton } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = (props) => {
    const { className } = props;
    const { t: translate } = useTranslation();

    return (
        <div className={classNames(cls.profileCard, {}, [className])}>
            <div className={classNames(cls.profileHeader)}>
                <Text title={translate('Profile')} />
                <Button className={cls.editButton} theme={ThemeButton.OUTLINE}>
                    <Text title={translate('Edit')} />
                </Button>
            </div>
            <div className={cls.profileData}>
                {/* className?: string;
                type?: string;
                value?: string;
                onInputchange?: (val: string) => void;
                placeholder?: string; */}
                {/* <Input value="data.firstname" placeholder={translate('Your first name')} className={cls.input} />
                <Input value={'data.firstname'} placeholder={translate('Your first name')} className={cls.input} /> */}
            </div>
        </div>
    );
};
