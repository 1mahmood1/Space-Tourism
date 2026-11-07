import CrewBody from '../components/CrewBody'
import data from "../data/data.json"


function CrewVictor() {
    const crewData = data.crew[2]
    return <CrewBody name={crewData.name} role={crewData.role} bio={crewData.bio} previosPage={"/crew/mark-shuttleworth"}/>
}

export default CrewVictor



