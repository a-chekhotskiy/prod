import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import axios from 'axios';

import { userActions } from 'entities/User/model/slice/userSlice';
import { User } from 'entities/User/model/types/UserSchema';
import { USER_LOCAL_STORAGE_KEY } from 'shared/constants/localstorage';

interface LoginProps {
    username: string;
    password: string;
}

export const loginThunk = createAsyncThunk<User, LoginProps, ThunkConfig<string>>('login', async (authData, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;
    try {
        const response = await extra.api.post<User>('/login', authData);

        if (!response.data) {
            throw new Error();
        }

        // simulating auth token storage
        localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));

        dispatch(userActions.setAuthData(response.data));

        // @ts-ignore
        extra.navigate('/profile');

        return response.data;
    } catch (err) {
        if (axios.isAxiosError(err)) {
            return rejectWithValue(err.response?.data.message);
        }

        return rejectWithValue((err as Error).message);
    }
});
