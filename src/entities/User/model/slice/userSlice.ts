import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCAL_STORAGE_KEY } from 'shared/constants/localstorage';
import { User, UserSchema } from '../types/UserSchema';

const initialState: UserSchema = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData(state, action: PayloadAction<User>) {
            state.data = action.payload;
        },
        initAuthData(state) {
            const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);

            if (user) {
                state.data = JSON.parse(user);
            }
        },
        logout(state) {
            localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
            state.data = undefined;
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
