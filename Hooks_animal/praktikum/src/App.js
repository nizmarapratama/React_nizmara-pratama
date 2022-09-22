// import { Form } from 'react-router-dom';
import Animal  from './Animal';
import React from 'react';
import './App.css';
import Home from './Home';
import { Route, Routes} from "react-router-dom";
import { Animal } from "./Animal";
import AnimalPageContainer from './Containers/AnimalPageContainer';
import AnimalDetailPageContainer from './Containers/AnimalDetailPageContainer';

function App ()  {
  return (
    <Routes>
       <Route path="/" exact element={<Home />} />
       <Route path="/animal" exact element={<AnimalPageContainer />} />
       <Route path="/animal/:id" exact element={<AnimalDetailPageContainer />} />
    </Routes>
   
  )
}

// return (
//   <div className="App">
//     <Animal/>
//   </div>
// )

export default App;
