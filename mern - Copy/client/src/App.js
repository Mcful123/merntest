import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import BinList from "./components/binList";
import ColorList from "./components/colorList";
import CompositionList from "./components/compositionList";
import MassList from "./components/massList";
import PressureList from "./components/pressureList";
import RainRateList from "./components/rainrateList";
import RandomNumberList from "./components/randomnumberList";
import RandomCharList from "./components/randomcharList";
import TimeList from "./components/timeList";
import TemperatureList from "./components/temperatureList";
import Query from "./components/complexQuery"

const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{ margin: 20 }}>
      <Routes>
        <Route exact path="/" element={<Query />} />
        <Route path="/bin" element={<BinList />} />
        <Route path="/color" element={<ColorList />} />
        <Route path="/composition" element={<CompositionList />} />
        <Route path="/mass" element={<MassList />} />
        <Route path="/pressure" element={<PressureList />} />
        <Route path="/rainRate" element={<RainRateList />} />
        <Route path="/randomNumber" element={<RandomNumberList />} />
        <Route path="/randomChar" element={<RandomCharList />} />
        <Route path="/time" element={<TimeList />} />
        <Route path="/temperature" element={<TemperatureList />} />
      </Routes>
      </div>
    </div>
  );
};

export default App;
