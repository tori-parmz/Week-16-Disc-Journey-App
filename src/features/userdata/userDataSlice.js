import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    //default userdata
    firstName: "First",
    lastName: "Last",
    profilePhoto: "./Assets/default-profile-photo.png",
    joinDate: "May 26, 2023",
  },
};

const userDataSlice = createSlice({
  name: "userdata",
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      //update only changes firstName, lastName & profilePhoto
      state.user.firstName = action.payload.firstName;
      state.user.lastName = action.payload.lastName;
      state.user.profilePhoto = action.payload.profilePhoto;
    },

    createNewUser: (state, action) => {
      //createNewUser replaces the user object
      state.user = action.payload;
    },
  },
});

export const { updateProfile, createNewUser } = userDataSlice.actions;

export default userDataSlice.reducer;
