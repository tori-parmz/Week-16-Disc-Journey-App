import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import collectionItems from "../../collection";

const albumApi = "https://64659acb228bd07b354e1cfd.mockapi.io/mycollection/";

export const getCollectionItems = createAsyncThunk('collection/getCollectionItems', () => {
    try {
        const response = fetch(albumApi);
        console.log(response);
        const data = response.json();
        return data;
      } catch (error) {
        console.log(error);
      }
})

const initialState = {
    collectionItems: collectionItems,
    collectionSize: collectionItems.length,

}

const collectionSlice = createSlice({
    name: 'collection',
    initialState,
    reducers: {

        postItem: (state, newCollectionItem) => {
            state.collectionItems.push(newCollectionItem);

    },



        removeItem: (state, action) => {
            const itemId = action.payload
            state.collectionItems = state.collectionItems.filter((item) =>
            item.id !== itemId);
            console.log(action);

    },

        updateReview: (state, {payload}) => {
        const collectionItem = state.collectionItems.find((item) => 
        item.id === payload.id)
        console.log(collectionItem);
        }
},
    extraReducers: {
        [getCollectionItems.fulfilled]: (state, action) => {
            console.log(action);
            state.collectionItems = action.payload
        }
    }


});

export const { removeItem, postItem } = collectionSlice.actions;

export default collectionSlice.reducer;