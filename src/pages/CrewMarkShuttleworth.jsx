import CrewBody from '../components/CrewBody'
import data from "../data/data.json"


function CrewMark() {
    const crewData = data.crew[1]
    return <CrewBody name={crewData.name} role={crewData.role} bio={crewData.bio} nextPage={`/crew/victor-glover`} previosPage={`/crew/douglas-hurley`} />
}

export default CrewMark



