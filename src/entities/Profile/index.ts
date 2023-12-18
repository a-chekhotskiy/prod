import { getProfileData } from './model/selectors/getProfileData';
import { getProfileIsLoading } from './model/selectors/getProfileIsLoading';
import { getProfileError } from './model/selectors/getProfileError';
import { profileActions, profileReducer } from './model/slice/profileSlice';
import { ProfileSchema } from './model/types/ProfileSchema';
import { ProfileCard } from './ui/ProfileCard/ProfileCard';

export { profileReducer, profileActions, ProfileSchema, getProfileData, getProfileError, getProfileIsLoading, ProfileCard };
