import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://681bdc7b6ae7c794cf700101.mockapi.io";

export const fetchDataContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await axios.get('/contacts');
        return response.data;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const deleteDataContacts = createAsyncThunk("contacts/deleteDataContacts", async (id, thunkAPI) => {
    try {
       await axios.delete(`/contacts/${id}`);
       return id;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const addDataContacts = createAsyncThunk("contacts/addDataContacts", async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
}); 


