// import { Form } from 'react-router-dom';
import Animal  from './Animal';
import React from 'react';
import './App.css';
import Home from './Home';
import { Route, Routes} from "react-router-dom";
import { Animal } from "./Animal";
import AnimalPageContainer from './Containers/AnimalPageContainer';
import AnimalDetailPageContainer from './Containers/AnimalDetailPageContainer';
import FormPageContainer from './Containers/FormPagecontainer';

function App ()  {
  return (
    <Routes>
       <Route path="/" exact element={<Home />} />
       <Route path="/animal" exact element={<AnimalPageContainer />} />
       <Route path="/animal/:id" exact element={<AnimalDetailPageContainer />} />
       <Route path="/form" exact element={<FormPageContainer />} />
    </Routes>
   
  )
}



export default App;
