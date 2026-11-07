import TechnologyBody from "../components/TechnologyBody"
import data from "../data/data.json"
import launchVehicleImgLaptop from "../assets/technology/image-launch-vehicle-portrait.jpg"
import launchVehicleImgPhone from "../assets/technology/image-launch-vehicle-landscape.jpg"
import SwipeHint from "../components/SwipeHint"

function TechnologyLaunchVehicle() {
    const technologyData = data.technology[0]
    return (
        <>
            <SwipeHint/>
            <TechnologyBody 
                name={technologyData.name} 
                description={technologyData.description} 
                imagePortrait={launchVehicleImgLaptop}
                imageLandscape={launchVehicleImgPhone}
                nextPage={"/technology/spaceport"}
            />
        </>
    )
}   
export default TechnologyLaunchVehicle