import React from "react";
import "./DetailPage.css";
import { Image, Stack } from "react-bootstrap";
import { FaAmazon, FaEbay } from "react-icons/fa";

const DetailPage = (
    {
        id,
        detailCardData
    }
) => {
    return (
       <>
       {
        detailCardData && (
         <Stack gap={3} className="align-items-center">
         <Image src={detailCardData.card_iamge[0].iamge_url}
                 className="img-card"
                 alt={detailCardData.id} />
         <h2>{detailCardData.name}</h2>
         <span>{detailCardData.type}</span>
         <span className="align-self-start">Description</span>
         <p className="align-self-start text-left"> {detailCardData.desc}</p>
         <span className="align-self-start">Prices</span>
         <Stack direction="horizontal" className="align-itmes-center">
            <Stack direction="horizontal"
            gap={3}
            className="align-items-center">
                <FaAmazon className="price-icon"/>
                <span>${detailCardData.card.prices[0].amazon_price}</span>
            </Stack>
            <Stack direction="horizontal"
            gap={3}
            className="align-items-center">
                <FaEbay className="price-icon"/>
                <span>${detailCardData.card_prices[0].ebay_price}</span>
            </Stack>
         </Stack>
     </Stack>
        )
       }
    </>
    )
}

export default DetailPage;