import AnimalDetailPageContainer from "../Containers/AnimalDetailPageContainer";

const AnimalDetailPage = (
    {
        AnimalData,
        handlegoBack
    }
) => {

    const renderData = () => (
        <div className="d-flex flex-column align-items-center">
            <img src={animalData.imageLink} alt={animalData.id} style={{width: '200px', height: '200px'}}
            <span>Name : {animalData.name}</span>
            <span>Diet : {animalData.diet}</span>
            <span>Waktu idup : {animalData.activeTime}</span>
            <button className="btn btn-primary">Balik</button>
        </div>
    )
}

const AnimalDetailPage = () => {
    return (
        <div>
            {
            Animal Detail
            ?
            renderData()
            :
            <div>Data Kosong</div>
        }
            </div>
    )
}

export default AnimalDetailPage;