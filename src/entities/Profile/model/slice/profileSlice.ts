import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Profile, ProfileSchema } from '../types/ProfileSchema';

const initialState: ProfileSchema = {
    data: undefined,
    error: undefined,
    isLoading: false,
    readOnly: true,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setData(state, action: PayloadAction<Profile>) {
            state.data = action.payload;
        },
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
