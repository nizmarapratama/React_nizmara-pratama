import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailPage from "../components/DetailPage";

const DetailPageContainer = () => {
    const { id } = useParams();
    const [detailCardData, setDetailCardData] = useState();
    const cards = useSelector((state) => state.data.cards);

    useEffect(() => {
        const searchedCard = cards.find((card) => card.id === +id);
        if (searchedCard) {
            setDetailCardData(searchedCard);
        }
    }, [id])

    return (
        <DetailPage id={id} detailCardData={detailCardData}/>
    );
};

export default DetailPageContainer;