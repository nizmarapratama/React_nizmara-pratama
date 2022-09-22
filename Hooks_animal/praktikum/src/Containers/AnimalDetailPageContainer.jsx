import AnimalDetailPage from "../Components/AnimalDetailPage"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react";
import { useState } from "react";

const AnimalDetailPageContainer = () => {
    const {id} =useParams ();
    const history = useNavigate();
    const [animalData, setAnimalData] = useState();
    useEffect( () => {
        const animal = animals.find((anml) => anml.id === +id);
        if(animal) {
            setAnimalData(animal);
        }
    }, [id]);

    const handleGoBack = () => {
        Navigate(-1);
    }
    
    return (
        <AnimalDetailPage animalData={animalData} handleGoBack={handleGoBack}/>
    )

}

export default AnimalDetailPageContainer;