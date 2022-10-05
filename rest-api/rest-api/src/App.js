// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import HomePageContianer from "./containers/HomePageContainer";
import DetailPageContainer from './containers/DetailPageContainer';


const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={HomePageContianer }/>
      <Route path="detail/:id" exact element={DetailPageContainer }/>
    </Routes>
  )
}

export default App;
