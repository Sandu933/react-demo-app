import AllMeetUpsPage from "./pages/AllMeetUps";
import NewMeetUpsUpsPage  from "./pages/NewMeetUps";
import FavouritesPage from "./pages/Favourite";
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div>
       <Routes>
      <Route path="/" element={<AllMeetUpsPage />} />
      <Route path="/new-meetups" element={<NewMeetUpsUpsPage />} />
      <Route path="/favourites" element={<FavouritesPage />} />
    </Routes>
    </div>
  );
}

export default App;
