import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const userDataApi = 'https://64659acb228bd07b354e1cfd.mockapi.io/mycollection/userdata';

export const getUserData = createAsyncThunk('userdata/getUserData', async () => {
    try {
        const response = await fetch(userDataApi`/1`);
        console.log(response);
        const data = await response.json();
        return data;
      } catch (error) {
        console.log(error);
      }
})

const initialState = {
    user: [],
    firstName: '',
    lastName: '',
    profilePhoto: './Assets/default-profile-photo.png',
    joinDate: '',
}

const userDataSlice = createSlice({
    name: 'userdata',
    initialState,

    reducers: {
        
    },

    extraReducers: (builder) => {
        builder
          .addCase(getUserData.fulfilled, (state, action) => {
            console.log(action);
            state.user = action.payload;
            console.log(state.user)
            state.firstName = state.user.firstName;
            state.lastName = state.user.lastName;
            state.profilePhoto = state.user.profilePhoto;
            state.joinDate = state.user.joinDate.slice(5, 6) + "/" + state.user.joinDate.slice(9, 10) + "/" + state.user.joinDate.slice(0, 3);
          })
}

    
})

export const { fillUserData } = userDataSlice.actions;

export default userDataSlice.reducer;