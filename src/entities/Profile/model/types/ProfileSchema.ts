import { COUNTRY, GENDER } from 'shared/constants/types';

export enum ValidateProfileError {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
}

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
    form?: Profile;
    isLoading: boolean;
    readOnly: boolean;
    error?: string;
    validateErrors?: ValidateProfileError[];
}
