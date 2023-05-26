import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



const albumApi = "https://64659acb228bd07b354e1cfd.mockapi.io/mycollection/album";



export const getCollectionItems = createAsyncThunk('collection/getCollectionItems', async () => {
    try {
        const response = await fetch(albumApi);
        console.log(response);
        const data = await response.json();
        return data;
      } catch (error) {
        console.log(error);
      }
})

export const postAlbumReview = createAsyncThunk('collection/postAlbumReview', async (newReview) => {
    try {
        let response = await fetch(albumApi, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newReview),
        });
        return await response.json(); // parse the response body as JSON
        
      } catch (error) {
        console.error(error);
      }
        })

export const updatePost = createAsyncThunk('collection/updatePost', async(id, updatedCollectionItem) => {
  try {
    let response = await fetch(`${albumApi}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCollectionItem),
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
})
   
  

export const deleteAlbum = createAsyncThunk('collection/deleteAlbum', async (id) => {
    try {
        const response = await fetch(albumApi + `/${id}`, {
          //deletes category by its ID
          method: "DELETE",
        });

        return response.json();
        
         //updates collection in state to reflect the change
      } catch (error) {
        console.error(error);
      }
}) 
    

const initialState = {
    collectionItems: [],
    collectionSize: 0,

}

const collectionSlice = createSlice({
    name: 'collection',
    initialState,
    reducers: {


        calculateTotal: (state) => {
            let collectionSize = 0;
            state.collectionItems.forEach(() => {
                collectionSize++
            });
            state.collectionSize = collectionSize;
            
          },
        
},
extraReducers: (builder) => {
    builder
      .addCase(getCollectionItems.fulfilled, (state, action) => {
        console.log(action);
        state.collectionItems = action.payload;
      })
      .addCase(postAlbumReview.fulfilled, (state, action) => {
        console.log(action);
        // post
        state.collectionItems.push(action.payload);
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        console.log(action);
        const collectionItem = state.collectionItems.find((item) => item.id == action.payload.id);
        console.log(collectionItem);
      })
      
      .addCase(deleteAlbum.fulfilled, (state, action) => {
        console.log(action);
        // Remove the deleted album from the collectionItems array
        state.collectionItems = state.collectionItems.filter(
          (item) => item.id !== action.payload.id
        );
      });
  },


});

export const { postItem, calculateTotal  } = collectionSlice.actions;

export default collectionSlice.reducer;