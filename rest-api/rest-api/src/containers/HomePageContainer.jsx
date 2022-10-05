import React ,{useState, useEffect} from "react";
import HomePage from "../components/HomePage.jsx";
import { client } from "../api.js";

const HomePageContainer = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log(cards);
  const getAllCard = async () => {
    const response = await client.get("/");
    return response.data.data
  }

  useEffect(() => {
    getAllCard()
      .then((res) => {
        setCards(res.slice(0,50));
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
