import { createSlice, createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "./filtersSlice";
import { addDataContacts, deleteDataContacts, fetchDataContacts } from "./contactsOps";


const slice = createSlice({
    name: "contacts",
    initialState: {
      items: [],
      isLoading: false,
      error: null,
    },

    extraReducers: (builder) => {
      builder
      .addCase(fetchDataContacts.pending, (state) => {
        state.isLoading = true;
       })
        .addCase(fetchDataContacts.fulfilled, (state, action) => {
          state.items = action.payload;
          state.isLoading = false;
        })
        .addCase(fetchDataContacts.rejected, (state, action) => {
          state.error = action.payload;
          state.isLoading = false;
        })
        .addCase(deleteDataContacts.fulfilled, (state, action) => {
          state.items = state.items.filter((item) => item.id !== action.payload);
        })
        .addCase(addDataContacts.fulfilled, (state, action) => {
          state.items.push(action.payload);
        });
    },
  });



export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export default slice.reducer;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, filter) => {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  );
