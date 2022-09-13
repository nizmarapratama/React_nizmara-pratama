import HomeScreen from "./Home/home";
import AboutScreen from "./About/about.js";
import FormScreen from "./Form/form";

import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<HomeScreen/>} path="/" />
      <Route element={<AboutScreen/>} path="/About" />
      <Route element={<FormScreen/>} path="/Form" />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
