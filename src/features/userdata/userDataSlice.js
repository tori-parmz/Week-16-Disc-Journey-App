import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: 'Tori',
    lastName: 'Parham',
    profilePhoto: 'https://i.ibb.co/3MMGzrc/tori-headshot-smaller.png',
    joinDate: 'May 23, 2023',
}

const userDataSlice = createSlice({
    name: 'userdata',
    initialState,
    }
)

export default userDataSlice.reducer;