import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";


const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    };
const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = ``;
    };    


export const registerThunk = createAsyncThunk('auth/register', async (body, thunkAPI) => {
    try {
    const response = await axios.post('/users/signup', body);
    setAuthHeader(response.data.token);
    return response.data;
    } catch(error) {
     return thunkAPI.rejectWithValue(error.message);
    }
})

export const loginThunk = createAsyncThunk('auth/login', async (body, thunkAPI) => {
    try {
    const response = await axios.post('/users/login', body);
    setAuthHeader(response.data.token);
    return response.data;
    } catch(error) {
     return thunkAPI.rejectWithValue(error.message);
    }
    
})

export const logoutThunk = createAsyncThunk('auth/logout', async (__, thunkAPI) => {
    try {
     await axios.post('/users/logout');
     clearAuthHeader();
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
    const response = await axios.get('/users/current');
     return response.data;
    } catch(error) {
     return thunkAPI.rejectWithValue(error.message);   
    }
})



