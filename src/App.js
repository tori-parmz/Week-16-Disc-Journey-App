import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AlbumInfo from "./hidden/Routes/AlbumInfo";
import LoginPage from "./components/Routes/LoginPage";
import MyCollection from "./components/Routes/MyCollection";
import MyJourney from "./components/Routes/MyJourney";
import NoPage from "./components/Routes/NoPage";
import Layout from "./components/Routes/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import NewEntry from "./components/Routes/NewEntry";
import AboutPage from "./components/Routes/AboutPage";
import { useEffect } from "react";
import {
  getCollectionItems,
  calculateTotal,
} from "./features/collection/collectionSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const { collectionItems } = useSelector((store) => store.collection); //gets the collectionItems array to calculate collectionSize
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCollectionItems()); //fills collection in store with API data
  }, []);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [collectionItems]);
  return (
    //browserouter creates paths to each page
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* home page renders collection grid */}
          <Route index element={<MyCollection />} />
          <Route path="myjourney" element={<MyJourney />} />
          <Route path="login" element={<LoginPage />} />
          {/* <Route path="albuminfo" element={<AlbumInfo />} /> */}
          <Route path="newentry" element={<NewEntry />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
