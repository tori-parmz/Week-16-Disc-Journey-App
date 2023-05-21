
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


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MyCollection />} />
          <Route path="myjourney" element={<MyJourney />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="albuminfo/" element={<AlbumInfo />} />
          <Route path="newentry" element={<NewEntry />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
