import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: 'Tori',
    lastName: 'Parham',
    profilePhoto: 'https://ibb.co/qWWX5yp',
    joinDate: 'May 23, 2023',
}

const userDataSlice = createSlice({
    name: 'userdata',
    initialState,
    }
)

export default userDataSlice.reducer;