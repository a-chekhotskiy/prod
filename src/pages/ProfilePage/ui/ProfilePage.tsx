import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { EditableProfileCard } from 'features/EditableProfileCard/EditableProfileCard';
import { fetchProfileData } from 'entities/Profile/model/services/fetchProfileData/fetchProfileData';
import { profileReducer } from 'entities/Profile';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ProfilePageHeader } from './ProfilePageHeader';

const reducers: ReducersList = {
    profile: profileReducer,
};

export default function ProfilePage() {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData());
        }
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div>
                {t('Profile')}
                <ProfilePageHeader />
                <EditableProfileCard />
            </div>
        </DynamicModuleLoader>
    );
}
