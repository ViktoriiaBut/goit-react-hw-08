import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// axios.defaults.baseURL = "https://connections-api.goit.global/";

export const goitApi = axios.create ({
    baseURL: "https://connections-api.goit.global/",
})

const setAuthHeader = token => {
    goitApi.defaults.headers.common.Autorization = `Bearer ${token}`;
    };
const removeAuthHeader = () => {
    goitApi.defaults.headers.common.Autorization = ``;
    };    

export const registerThunk = createAsyncThunk('register', async (body, thunkAPI) => {
    try {
    const response = await goitApi.post('/users/signup', body);
    setAuthHeader(response.data.token);
    return response.data;
    } catch(error) {
     return thunkAPI.rejectWithValue(error.message);
    }
})

export const loginThunk = createAsyncThunk('login', async (body, thunkAPI) => {
    try {
    const response = await goitApi.post('/users/login', body);
    setAuthHeader(response.data.token);
    return response.data;
    } catch(error) {
     return thunkAPI.rejectWithValue(error.message);
    }
    
})

export const logoutThunk = createAsyncThunk('logout', async (__, thunkAPI) => {
    try {
     await goitApi.post('/user/logout');
     removeAuthHeader();
    } catch(error) {
     return thunkAPI.rejectWithValue(error.message);
    }
})

export const refreshThunk = createAsyncThunk('aurth/refresh', async (__, thunkAPI) => {
    try {
    const savedToken = thunkAPI.getState().auth.token;
    if (!savedToken) {
        return thunkAPI.rejectWithValue('Token is not exist')
    } 
    
    setAuthHeader(savedToken)
    const response = await goitApi.get('auth/me');
     return response.data;
    } catch(error) {
     return thunkAPI.rejectWithValue(error.message);   
    }
})