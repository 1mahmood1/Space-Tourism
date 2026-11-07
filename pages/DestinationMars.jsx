
import Destination from "../components/DestinationBody"
import data from "../data/data.json"

function DestinationMars() {
    let planetData = data.destinations[1]
    return (
        <Destination 
        planet={planetData.name} 
        description={planetData.description} 
        distance={planetData.distance} 
        travel={planetData.travel} 
        planetImg={planetData.images.png}
        previosPage={"/destination/moon"}
        nextPage={"/destination/europa"}
        />
    )
}

export default DestinationMars