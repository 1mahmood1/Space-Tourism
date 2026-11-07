import Destination from "../components/DestinationBody"
import data from "../data/data.json"

function DestinationMoon() {
    let planetData = data.destinations[3]
    return (
            <Destination 
            planet={planetData.name} 
            description={planetData.description} 
            distance={planetData.distance} 
            travel={planetData.travel} 
            planetImg={planetData.images.png}
            previosPage={"/destination/europa"}
            />
        )
}

export default DestinationMoon