import { useState, useEffect } from "react";

const [myCollection, setMyCollection] = useState([]);
const [newEntry, setNewEntry] = useState("");

const albumsApi = "https://64659acb228bd07b354e1cfd.mockapi.io/mycollection/";

export async function getCollection() {
    try {
      const response = await fetch(albumsApi);
      console.log(response);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

export async function postCategory(e, albumName) {
    e.preventDefault(); //used for things wrapped in a form, keeps it from refreshing the page before using contents
    try {
      let response = await fetch(albumsApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ albumName }),
      });
      const result = await response.json(); // parse the response body as JSON
      setMyCollection([...myCollection, result]); // update the state with the new category
    } catch (error) {
      console.error(error);
    }

    setNewCategory("");
    e.target.reset();
  }

export async function deleteAlbum(id) {
    try {
      await fetch(albumsApi + `/${id}`, {
        //deletes category by its ID
        method: "DELETE",
      });
      const response = await getCollection();
      setMyCollection(response); //updates allCategories in state to reflect the change
    } catch (error) {
      console.error(error);
    }
  }

export async function updateCategory(id, updatedCategory) {
    //this recieves the categoryId and
    //the menuCategory from MenuCategory component
    try {
      await fetch(`${albumsApi}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCategory),
      });
      const response = await getCollection();
      setMyCollection(response); //update state to reflect the change
    } catch (error) {
      console.log(error);
    }
  }

export async function deleteMenuItem(id, menuItemId, menuCategory) {
    console.log("Category ID: ", id, "Item ID: ", menuItemId);
    const updatedCategory = {
      ...menuCategory,
      menuItems: menuCategory.menuItems.filter(
        (menuItem) => menuItem.itemId !== menuItemId
      ),
      //filter to return only items that do not match the deleted item ID
      //only works because menuCategory is holding data for the unique id value
      //and menuItemId is recieving menuItem.itemId from MenuCategory component
    };
    console.log(updatedCategory);
    try {
      await updateCategory(id, updatedCategory); //updatedCategory has all the same data
      //except for the deleted item
      const response = await getCollection();
      setMyCollection(response); //update state
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    //get information, then update state
    async function stateUpdate() {
      try {
        const menuData = await getCollection();
        console.log(menuData);
        setMyCollection(menuData);
        // return allCategories
      } catch (error) {
        console.log(error);
      }
    }
    stateUpdate();
  }, []);