import { configureStore } from "@reduxjs/toolkit";
import collectionReducer from './features/collection/collectionSlice';
import userDataReducer from './features/userdata/userDataSlice'

export const store = configureStore({
    reducer: {
        collection: collectionReducer,
        userdata: userDataReducer

    }
})