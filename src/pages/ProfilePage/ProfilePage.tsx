import { ProfileCard } from 'entities/Profile';
import { profileReducer } from 'entities/Profile/model/slice/profileSlice';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useReducerLoader } from 'shared/lib/hooks/useReducerLoader';

const reducersList = {
    profile: profileReducer,
};

export default function ProfilePage() {
    const { t } = useTranslation();
    const { addReducer } = useReducerLoader(reducersList);
    // TODO ALEX start from this next time
    // const data = useSelector();

    useEffect(() => {
        addReducer();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            {t('Profile')}
            {/* <ProfileCard data={} /> */}
        </div>
    );
}
