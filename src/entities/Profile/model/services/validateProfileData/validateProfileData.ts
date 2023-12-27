import { Profile, ValidateProfileError } from 'entities/Profile/model/types/ProfileSchema';

export const validateProfileData = (profile?: Profile) => {
    const errors: ValidateProfileError[] = [];

    console.log(profile);

    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }

    const { firstname, lastname, age, country, gender, avatar } = profile;

    if (!firstname || !lastname) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }

    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY);
    }

    console.log(errors);

    return errors;
};
