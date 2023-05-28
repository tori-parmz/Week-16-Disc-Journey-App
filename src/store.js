import { configureStore } from "@reduxjs/toolkit";
import collectionReducer from './features/collection/collectionSlice';
import userDataReducer from './features/userdata/userDataSlice'
//importing the reducers from collectionSlice and userdataSlice

export const store = configureStore({
    reducer: {
        collection: collectionReducer,
        userdata: userDataReducer,

    }
})