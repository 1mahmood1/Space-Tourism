import DouglasHurleyImg from "../assets/crew/image-douglas-hurley.png";
import MarkShuttleworthImg from "../assets/crew/image-mark-shuttleworth.png";
import VictorGloverImg from "../assets/crew/image-victor-glover.png";

const names = {
    "Douglas Hurley": DouglasHurleyImg,
    "Mark Shuttleworth": MarkShuttleworthImg,
    "Victor Glover": VictorGloverImg,
}

function crewImg(name) {
    return names[name]
}

export default crewImg