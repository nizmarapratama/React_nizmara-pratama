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
import ReadArticlePageContainer from './Containers/ReadArticlePageComponent';
import CreateArticlePageContainer from './Containers/CreateArticlePageContainer';
import DeleteArticlePageContainer from './Containers/DeleteArticlePageContainer';

function App ()  {
  return (
    <Routes>
       <Route path="/" exact element={<Home />} />
       <Route path="/animal" exact element={<AnimalPageContainer />} />
       <Route path="/animal/:id" exact element={<AnimalDetailPageContainer />} />
       <Route path="/form" exact element={<FormPageContainer />} />
       <Route path="/read-article" exact element={<ReadArticlePageContainer />} />
       <Route path="/create-article" exact element={<CreateArticlePageContainer />} />
       <Route path="/delete-article" exact element={<DeleteArticlePageContainer />} />
    </Routes>
   
  )
}



export default App;
