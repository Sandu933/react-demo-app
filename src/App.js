import AllMeetUpsPage from "./pages/AllMeetUps";
import NewMeetUpsUpsPage  from "./pages/NewMeetUps";
import FavouritesPage from "./pages/Favourite";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetUpsPage />} />
          <Route path="/new-meetups" element={<NewMeetUpsUpsPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
        </Routes>
      </Layout>  
    </div>
  );
}

export default App;
