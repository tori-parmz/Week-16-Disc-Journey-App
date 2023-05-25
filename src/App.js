
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AlbumInfo from './components/Routes/AlbumInfo';
import LoginPage from './components/Routes/LoginPage';
import MyCollection from './components/Routes/MyCollection';
import MyJourney from './components/Routes/MyJourney';
import NoPage from './components/Routes/NoPage';
import Layout from './components/Routes/Layout';
import "bootstrap/dist/css/bootstrap.min.css";
import NewEntry from './components/Routes/NewEntry';
import AboutPage from './components/Routes/AboutPage';
import { useEffect } from 'react';
import { getCollectionItems, calculateTotals } from './features/collection/collectionSlice';
import { useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getCollectionItems());
    }, []);

    useEffect(() => {
      dispatch(calculateTotals());
    }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MyCollection />} />
          <Route path="myjourney" element={<MyJourney />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="albuminfo" element={<AlbumInfo />} />
          <Route path="newentry" element={<NewEntry />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
