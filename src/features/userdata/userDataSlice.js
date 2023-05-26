import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const userDataApi = 'https://64659acb228bd07b354e1cfd.mockapi.io/mycollection/userdata';

export const getUserData = createAsyncThunk('userdata/getUserData', async () => {
    try {
        const response = await fetch(userDataApi+'/1');
        console.log(response);
        const data = await response.json();
        return data;
      } catch (error) {
        console.log(error);
      }
})

const initialState = {
    user: [],
    loadingUserData: true,
}

const userDataSlice = createSlice({
    name: 'userdata',
    initialState,

    reducers: {
        
    },

    extraReducers: (builder) => {
        builder
          .addCase(getUserData.fulfilled, (state, action) => {
            state.loadingUserData = false;
            console.log(action);
            state.user = action.payload;
            console.log(state.user);
          })

          .addCase(getUserData.pending, (state) => {
            state.loadingUserData = true
          })

          .addCase(getUserData.rejected, (state) => {
            state.loadingUserData = false
          })
}

    
})

export const { fillUserData } = userDataSlice.actions;

export default userDataSlice.reducer;