import TechnologyBody from "../components/TechnologyBody"
import data from "../data/data.json"
import SpaceportImgLaptop from "../assets/technology/image-spaceport-portrait.jpg"
import SpaceportImgPhone from "../assets/technology/image-spaceport-landscape.jpg"

function TechnologySpaceport() {
    const technologyData = data.technology[1]
    return (
        <TechnologyBody 
            name={technologyData.name} 
            description={technologyData.description} 
            imagePortrait={SpaceportImgLaptop}
            imageLandscape={SpaceportImgPhone}
            previosPage={"/technology/launch-vehicle"}
            nextPage={"/technology/space-capsule"}
        />
    )
}   
export default TechnologySpaceport
