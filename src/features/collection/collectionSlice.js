import { createSlice } from "@reduxjs/toolkit";
import collectionItems from "../../collection";

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
}
});

export const { removeItem, postItem } = collectionSlice.actions;

export default collectionSlice.reducer;