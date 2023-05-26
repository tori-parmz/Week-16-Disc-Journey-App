import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const userDataApi = 'https://64659acb228bd07b354e1cfd.mockapi.io/mycollection/userdata';

export const getUserData = createAsyncThunk('userdata/getUserData', async (id) => {
    try {
        const response = await fetch(userDataApi + `/${id}`);//fetches the one user item
        console.log(response);
        const data = await response.json();
        return data;
      } catch (error) {
        console.log(error);
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
    users: [],
    loadingUserData: true,
    userId: 0
}

const userDataSlice = createSlice({
    name: 'userdata',
    initialState,

    reducers: {
      findUser: (state) => {
        let userId = 0;
        state.users.forEach(() => {
            userId++
        });
        state.userId = userId;
        
      },
        
    },

    extraReducers: (builder) => {
        builder
          .addCase(getUserData.fulfilled, (state, action) => {
            state.loadingUserData = false;
            console.log(action);
            state.users = action.payload;
            console.log(state.users);
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
            state.users.push(action.payload);
          })

          .addCase(updateUser.fulfilled, (state, action) => {
            const { id, updatedUser } = action.payload;
            const index = state.users.findIndex((item) => item.id === action.payload.id);
    
          if (index !== id) {
            state.users[index] = updatedUser;
            }
          });
}

    
})

export const { findUser  } = userDataSlice.actions;

export default userDataSlice.reducer;