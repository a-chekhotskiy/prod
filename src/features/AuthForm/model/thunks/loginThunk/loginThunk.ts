import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { userActions } from 'entities/User/model/slice/userSlice';
import { User } from 'entities/User/model/types/UserSchema';
import { USER_LOCAL_STORAGE_KEY } from 'shared/constants/localstorage';

interface LoginProps {
    username: string;
    password: string;
}

export const loginThunk = createAsyncThunk<User, LoginProps, { rejectValue: string }>('login', async (authData, thunkAPI) => {
    try {
        const response = await axios.post<User>('http://localhost:8000/login', authData);

        // simulating auth token storage
        localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));

        thunkAPI.dispatch(userActions.setAuthData(response.data));

        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data.message);
    }
});
