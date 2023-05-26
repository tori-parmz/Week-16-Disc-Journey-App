import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: {
      firstName: "First",
      lastName: "Last",
      profilePhoto: "./Assets/default-profile-photo.png",
    },
    joinDate: "May 26, 2023"
}

const userDataSlice = createSlice({
  name: 'userdata',
  initialState,
  reducers: {

    updateProfile: (state, action) => {
      state.user = action.payload;
  },

    
  }
});     


export const { updateProfile  } = userDataSlice.actions;

export default userDataSlice.reducer;