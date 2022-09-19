import React, {useEffect, useState} from "react";
import { animals } from "./data";

const Animal = () => {
    const [AnimalList, setAnimalList] = useState(animals);
    const [searchWords, setSearctWords] = useState("");

    useEffect(() => {
        const loweredSearchedWords = searchWords.toLowerCase();
        const updateAnimallist = [];
        if (searchWords !== "") {
            animals.forEach((animal) => {
                const loweredAnimalName = animal.name.toLowerCase();
                if (loweredAnimalName.includes(loweredSearchedWords)) {
                    updateAnimallist.push(animal);
                }
            })
            
            setAnimalList(updateAnimallist);
        } else {
            setAnimalList(animals);
        }
    })


    return () => (
        <div className="d-flex flex-column justify-content-start align-items-center">
        <input className="form-control mb-3"
        value={searchWords}
        onChange={(ev) => setSearctWords(ev.currentTarget.value)}/>
        <div className="container-fluid d-flex flex-row justify-content-center align-content-between align-items-center">
            {
                AnimalList.map((animal) => {
                    return (
                        <div className="card m-2 align-items-center" key={animal.id} style={{width: "18rem"}}>
                            <img src={animal.imageLink} alt={animal.name}
                            className="card-img-top" style={{width: "10rem", height: "10rem", objectFit: "cover"}}/>
                            <div className="card-body">
                                <p className="card-text">{animal.name}</p>
                            </div>
                        </div>
                    );
                })
            }
        </div>
        </div>
    )

export default Animal;