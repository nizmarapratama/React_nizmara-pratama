import React from "react";
import { Stack, Spinner, Image } from "react-bootstrap";
import "./HomePage.css";

const Card = ({imgUrl,name}) => (
  <Stack gap={2} className="card-container align-items-center">
    <Image src={imgUrl} className="card-image"/>
    <span>{name}</span>
  </Stack>
)

const HomePage = (
  {
    cards,
    isLoading
  }
) => {
  return (
    <>
      {
        isLoading
          ?
          <Spinner animation="border" size="lg" role="status" variant="primary"/>
          :
          <Stack direction="horizontal" className="flex-wrap" gap={3}>
            {
              cards.map((card) => (
                <Card key={card.id}
                      imgUrl={card.card_images[0].image_url_small}
                      name={card.name} />
              ))
            }
          </Stack>
      }
    </>
  );
};

export default HomePage;
