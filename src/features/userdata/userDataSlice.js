import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const userDataApi = 'https://64659acb228bd07b354e1cfd.mockapi.io/mycollection/userdata';

export const getUserData = createAsyncThunk('userdata/getUserData', async () => {
    try {
        const response = await fetch(userDataApi);
        console.log(response);
        const data = await response.json();
        return data;
      } catch (error) {
        console.log(error);
      }
})

const initialState = {
    firstName: 'Tori',
    lastName: 'Parham',
    profilePhoto: 'https://i.ibb.co/3MMGzrc/tori-headshot-smaller.png',
    joinDate: 'May 23, 2023',
}

const userDataSlice = createSlice({
    name: 'userdata',
    initialState,

    reducers: {
        extraReducers: (builder) => {
            builder
              .addCase(getUserData.fulfilled, (state, action) => {
                console.log(action);
                state.collectionItems = action.payload;
              })
    }

    }

    
})

export default userDataSlice.reducer;