import axios from 'axios';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'helpers/tests/TestAsyncThunk/TestAsyncThunk';
import { COUNTRY } from 'shared/constants/types';
import { fetchProfileData } from './fetchProfileData';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

const data = {
    // username: 'admin',
    age: '22',
    country: COUNTRY.CZ,
    lastname: 'che',
    first: 'alex',
};

describe('fetchProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        mockedAxios.get.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();

        expect(mockedAxios.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error login', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        mockedAxios.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
