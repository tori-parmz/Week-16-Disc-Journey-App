import { createSlice } from "@reduxjs/toolkit";
import collectionItems from "../../collection";

const initialState = {
    collectionItems: collectionItems,
    collectionSize: collectionItems.length,
    isLoading: true,

}

const collectionSlice = createSlice({
    name: 'collection',
    initialState
});

export default collectionSlice.reducer;