import AllMeetUpsPage from "./pages/AllMeetUps";
import NewMeetUpsUpsPage  from "./pages/NewMeetUps";
import FavouritesPage from "./pages/Favourite";
import { Route, Routes } from "react-router-dom"
import MainNavBar from "./components/layout/MainNavigationBar";

function App() {
  return (
    <div>
      <MainNavBar />
       <Routes>
      <Route path="/" element={<AllMeetUpsPage />} />
      <Route path="/new-meetups" element={<NewMeetUpsUpsPage />} />
      <Route path="/favourites" element={<FavouritesPage />} />
    </Routes>
    </div>
  );
}

export default App;
