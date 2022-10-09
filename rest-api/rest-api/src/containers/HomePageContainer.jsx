import React ,{useState, useEffect} from "react";
import HomePage from "../components/HomePage.jsx";
import { client } from "../api.js";
import { useDispatch, useSelector } from "react-redux";
import { setCards } from "../features/dataSlice.js";

const HomePageContainer = () => {
  const cards = useSelector ((state) => state.data.cards);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  
  const getAllCard = async () => {
    const response = await client.get("/");
    return response.data.data
  }

  useEffect(() => {
    getAllCard()
      .then((res) => {
        dispatch(setCards(res.slice(0,50)));
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      })
  },[])

  return (
    <HomePage cards={cards} isLoading={isLoading}/>
  )
}

export default HomePageContainer;
