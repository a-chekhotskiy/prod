import { ProfileCard, getProfileData } from 'entities/Profile';
import { profileReducer } from 'entities/Profile/model/slice/profileSlice';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useReducerLoader } from 'shared/lib/hooks/useReducerLoader';
import { EditableProfileCard } from 'features/EditableProfileCard/EditableProfileCard';
import { fetchProfileData } from 'entities/Profile/model/services/fetchProfileData/fetchProfileData';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { ProfilePageHeader } from './ui/ProfilePageHeader';

const reducersList = {
    profile: profileReducer,
};

export default function ProfilePage() {
    const { t } = useTranslation();
    const data = useSelector(getProfileData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    console.log(data);

    return (
        <div>
            {t('Profile')}
            <ProfilePageHeader />
            <EditableProfileCard />
        </div>
    );
}
