import React from "react";
import { Route, Routes } from "react-router-dom";
import Booking from "./components/Booking.js";
import Dashboard from "./components/Dashboard.js";
import Farmers from "./components/Farmer.js";
import Apiculture from "./components/Farms/Apiculture.js";
import Aquaculture from "./components/Farms/Aquaculture.js";
import Arable from "./components/Farms/Arable.js";
import Floriculture from "./components/Farms/floriculture.js";
import Livestock from "./components/Farms/livestock.js";
import Monoculture from "./components/Farms/Monoculture.js";
import Organic from "./components/Farms/Organic.js";
import Pomology from "./components/Farms/Pomology.js";
import Poultry from "./components/Farms/poultry.js";
import Serenity from "./components/Farms/assets/flowers/serenity.js";
import LandingPage from "./components/Home.js";
import LogOut from "./components/LogOut.js";
import SignIn from "./components/SignIn.js";
import SignUp from "./components/SignUp.js";
import Navbar from "./components/navbar.js";
import Payment from "./components/payment.js";
// import Axios from "axios";
function App() {
  // const [isLogged, setIsLogged] = React.useState(true);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        {/* {isLogged &&  */}
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/arable" element={<Arable />}></Route>
        <Route path="/poultry" element={<Poultry />}></Route>
        <Route path="/livestock" element={<Livestock />}></Route>
        <Route path="/apiculture" element={<Apiculture />}></Route>
        <Route path="/monoculture" element={<Monoculture />}></Route>
        <Route path="/aquaculture" element={<Aquaculture />}></Route>
        <Route path="/organic" element={<Organic />}></Route>
        <Route path="/floriculture" element={<Floriculture />}></Route>
        <Route path="/pomology" element={<Pomology />}></Route>
        <Route path="/serenity" element={<Serenity />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/logout" element={<LogOut />}></Route>
        <Route path="/farmers" element={<Farmers />}></Route>
      </Routes>
    </>
  );
}

export default App;
