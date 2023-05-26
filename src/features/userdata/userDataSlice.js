import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const userDataApi = 'https://64659acb228bd07b354e1cfd.mockapi.io/mycollection/userdata';

export const getUserData = createAsyncThunk('userdata/getUserData', async () => {
    try {
        const response = await fetch(userDataApi + '/1');//fetches the one user item
        console.log(response);
        const data = await response.json();
        return data;
      } catch (error) {
        console.log(error);
      }
})

export const deleteUser = createAsyncThunk('userdata/deleteUser', async () => {
  try {
      const response = await fetch(userDataApi + '/1', {
        //clears all userdata
        method: "DELETE",
      });

      return response.json();
    } catch (error) {
      console.error(error);
    }
})

export const postNewUser = createAsyncThunk('userdata/postNewUser', async (newUserData) => {
  try {
      let response = await fetch(userDataApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUserData),//posts the ne user object
      });
      return await response.json(); // parse the response body as JSON
      
    } catch (error) {
      console.error(error);
    }
      })

      export const updateUser = createAsyncThunk('userdata/updateUser', async(id, updatedUser) => {
        try {
          let response = await fetch(userDataApi + `/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedUser),
          });
          // return await response.json();
          console.log(await response.json());
        } catch (error) {
          console.log(error);
        }
      })

const initialState = {
    user: [],
    loadingUserData: true,
}

const userDataSlice = createSlice({
    name: 'userdata',
    initialState,

    reducers: {
        
    },

    extraReducers: (builder) => {
        builder
          .addCase(getUserData.fulfilled, (state, action) => {
            state.loadingUserData = false;
            console.log(action);
            state.user = action.payload;
            console.log(state.user);
          })

          .addCase(getUserData.pending, (state) => {
            state.loadingUserData = true
          })

          .addCase(getUserData.rejected, (state) => {
            state.loadingUserData = false
          })

          .addCase(postNewUser.fulfilled, (state, action) => {
            console.log(action);
            // post
            state.user =(action.payload);
          })

          .addCase(deleteUser.fulfilled, (state, action) => {
            console.log(action);
            state.user = [];
          
          })

          .addCase(updateUser.fulfilled, (state, action) => {
            const { id, updatedUser } = action.payload;
            const index = state.user.findIndex((item) => item.id === action.payload.id);
    
          if (index !== id) {
            state.user[index] = updatedUser;
            }
          });
}

    
})

export default userDataSlice.reducer;