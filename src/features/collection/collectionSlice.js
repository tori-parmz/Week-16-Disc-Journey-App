import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const albumApi = "https://64659acb228bd07b354e1cfd.mockapi.io/mycollection/album";

export const getCollectionItems = createAsyncThunk('collection/getCollectionItems', async () => {
    try {
        const response = await fetch(albumApi);
        console.log(response);
        const data = response.json();
        return data;
      } catch (error) {
        console.log(error);
      }
})

export const deleteAlbum = createAsyncThunk('collection/deleteAlbum', (id => {
    try {
        fetch(albumApi + `/${id}`, {
          //deletes category by its ID
          method: "DELETE",
        });
        const response = getCollectionItems;
        return response
         //updates collection in state to reflect the change
      } catch (error) {
        console.error(error);
      }
})) 
    

const initialState = {
    collectionItems: [],
    collectionSize: 0,

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
            state.collectionItems = deleteAlbum

    },

        updateReview: (state, {payload}) => {
        const collectionItem = state.collectionItems.find((item) => 
        item.id === payload.id)
        console.log(collectionItem);
        },

        calculateTotals: (state) => {
            let collectionSize = 0;
            state.collectionItems.forEach((item) => {
                collectionSize += item
            });
            state.collectionSize = collectionSize;
            
          },
        
},
    extraReducers: {
        [getCollectionItems.fulfilled]: (state, action) => {
            console.log(action);
            state.collectionItems = action.payload
        }
    }


});

export const { removeItem, postItem, calculateTotals  } = collectionSlice.actions;

export default collectionSlice.reducer;