import moonImg from '../assets/destination/image-moon.png'
import marsImg from '../assets/destination/image-mars.png'
import europaImg from '../assets/destination/image-europa.png'
import titanImg from '../assets/destination/image-titan.png'

const images = {
    Moon: moonImg,
    Mars: marsImg,
    Europa: europaImg,
    Titan: titanImg,
}

function PlanetImg(planet) {
    return images[planet]
}

export default PlanetImg