import CrewBody from '../components/CrewBody'
import data from "../data/data.json"
import SwipeHint from '../components/SwipeHint'

function CrewDouglas() {
    const crewData = data.crew[0]
    return ( 
        <>
            <SwipeHint/>
            <CrewBody name={crewData.name} role={crewData.role} bio={crewData.bio} nextPage={`/crew/mark-shuttleworth`} />
        </>
    )
}

export default CrewDouglas



