import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: {
      firstName: "First",
      lastName: "Last",
      profilePhoto: "./Assets/default-profile-photo.png",
      joinDate: "May 26, 2023"
    },
    
}

const userDataSlice = createSlice({
  name: 'userdata',
  initialState,
  reducers: {

    updateProfile: (state, action) => {
      state.user.firstName = action.payload.firstName;
      state.user.lastName = action.payload.lastName;
      state.user.profilePhoto = action.payload.profilePhoto;
      
  },

    createNewUser: (state, action) => {
      state.user = action.payload;
  },

    
  }
});     


export const { updateProfile, createNewUser  } = userDataSlice.actions;

export default userDataSlice.reducer;