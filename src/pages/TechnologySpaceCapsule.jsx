import TechnologyBody from "../components/TechnologyBody"
import data from "../data/data.json"
import launchVehicleImgLaptop from "../assets/technology/image-space-capsule-portrait.webp"
import launchVehicleImgPhone from "../assets/technology/image-space-capsule-landscape.webp"


function SpaceCapsule() {
    const technologyData = data.technology[2]
    return (
        <TechnologyBody 
            name={technologyData.name} 
            description={technologyData.description} 
            imagePortrait={launchVehicleImgLaptop}
            imageLandscape={launchVehicleImgPhone}
            previosPage={"/technology/spaceport"}
        />
    )
}   
export default SpaceCapsule
