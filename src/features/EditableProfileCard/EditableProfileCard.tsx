import { ProfileCard, getProfileError, getProfileIsLoading, profileActions, profileReducer } from 'entities/Profile';
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm';
import { getProfileReadOnly } from 'entities/Profile/model/selectors/getProfileReadOnly';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { COUNTRY } from 'shared/constants/types';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface EditableProfileCardProps {
    className?: string;
}

export const EditableProfileCard: React.FC<EditableProfileCardProps> = (props) => {
    // const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadOnly);

    const onChangeFirstName = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ firstname: value ?? '' }));
        },
        [dispatch],
    );

    const onChangeLastName = useCallback((value?: string) => dispatch(profileActions.updateProfile({ lastname: value || '' })), [dispatch]);

    const onChangeAge = useCallback(
        (age?: string) => {
            dispatch(profileActions.updateProfile({ age }));
        },
        [dispatch],
    );

    const onChangeCountry = useCallback(
        (country?: string) => {
            dispatch(profileActions.updateProfile({ country }));
        },
        [dispatch],
    );

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <ProfileCard
                data={formData}
                isLoading={isLoading}
                error={error}
                readonly={readonly}
                onChangeFirstName={onChangeFirstName}
                onChangeLastName={onChangeLastName}
                onChangeAge={onChangeAge}
                onChangeCountry={onChangeCountry}
            />
        </DynamicModuleLoader>
    );
};
