// import { Route } from "@mui/icons-material";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header";
import CarDetails from "./Pages/CarDetailsPage";
import DealerShipPage from "./Pages/DealerShipPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<DealerShipPage />}></Route>
        <Route path="cars" element={<CarDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
