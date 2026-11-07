import Destination from "../components/DestinationBody"
import data from "../data/data.json"

function DestinationEuropa() {
    let planetData = data.destinations[2]
    return (
            <Destination 
            planet={planetData.name} 
            description={planetData.description} 
            distance={planetData.distance} 
            travel={planetData.travel} 
            planetImg={planetData.images.png}
            previosPage={"/destination/mars"}
            nextPage={"/destination/titan"}
            />
        )
}

export default DestinationEuropa