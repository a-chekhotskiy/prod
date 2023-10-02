import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile/model/types/ProfileSchema';

export const getProfileThunk = createAsyncThunk<Profile, {}, ThunkConfig<string>>('profile/getProfileData', async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    try {
        const response = await extra.api.get<Profile>('/profile');

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (err) {
        if (axios.isAxiosError(err)) {
            return rejectWithValue(err.response?.data.message);
        }

        return rejectWithValue((err as Error).message);
    }
});
