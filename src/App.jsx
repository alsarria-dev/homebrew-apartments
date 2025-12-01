// Importing Modules
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";

// Importing Pages
import ApartmentListing from "./pages/ApartmentListing";
import ApartmentDetails from "./pages/ApartmentDetails";
import ApartmentFavorites from "./pages/ApartmentFavorites";
import AddApartmentPage from "./pages/AddApartmentPage";
import About from "./pages/About";

// Importing Components for main page
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// Importing Styles
import "./App.css";

// Importing Data
import apartment_data from "./data/project_data.json";

// Main App function
function App() {
  const [dataArray, setDataArray] = useState(apartment_data.results);
  const [allApartments, setAllApartments] = useState(apartment_data.results);
  const [favArray, setFavArray] = useState([]);
  const [inputData, setInputData] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      setInputData(e.target.value);
      navigate("/properties");
    }
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage handleSubmit={handleSubmit} />} />
        <Route
          path="/properties"
          element={
            <ApartmentListing
              allApartments={allApartments}
              dataArray={dataArray}
              setDataArray={setDataArray}
              favArray={favArray}
              setFavArray={setFavArray}
              inputData={inputData}
              setInputData={setInputData}
            />
          }
        ></Route>
        <Route
          path="/favorites"
          element={
            <ApartmentFavorites favArray={favArray} setFavArray={setFavArray} />
          }
        ></Route>
        <Route
          path="/details/:apartmentId"
          element={<ApartmentDetails dataArray={dataArray} />}
        ></Route>
        <Route
          path="/add_apartment"
          element={
            <AddApartmentPage
              dataArray={dataArray}
              setDataArray={setDataArray}
              allApartments={allApartments}
              setAllApartments={setAllApartments}
            />
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
