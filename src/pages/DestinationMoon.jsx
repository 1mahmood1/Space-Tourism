import Destination from "../components/DestinationBody"
import data from "../data/data.json"
import SwipeHint from "../components/SwipeHint"

function DestinationMoon() {
    let planetData = data.destinations[0]
    return (
        <>
            <SwipeHint/>
            
            <Destination 
            planet={planetData.name} 
            description={planetData.description} 
            distance={planetData.distance} 
            travel={planetData.travel} 
            planetImg={planetData.images.png}
            nextPage={"/destination/mars"}
            />
        </>
    )
}

export default DestinationMoon