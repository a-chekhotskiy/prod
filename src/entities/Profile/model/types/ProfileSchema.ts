import { COUNTRY, GENDER } from 'shared/constants/types';

export interface Profile {
    firstname: string;
    lastname: string;
    age: number;
    country: COUNTRY;
    gender: GENDER;
    avatar: string;
}

export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean;
    readOnly: boolean;
    error?: string;
}
