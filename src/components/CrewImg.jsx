import DouglasHurleyImg from "../assets/crew/image-douglas-hurley.webp";
import MarkShuttleworthImg from "../assets/crew/image-mark-shuttleworth.webp";
import VictorGloverImg from "../assets/crew/image-victor-glover.webp";

const names = {
    "Douglas Hurley": DouglasHurleyImg,
    "Mark Shuttleworth": MarkShuttleworthImg,
    "Victor Glover": VictorGloverImg,
}

function crewImg(name) {
    return names[name]
}

export default crewImg
