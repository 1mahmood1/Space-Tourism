import moonImg from '../assets/destination/image-moon.webp'
import marsImg from '../assets/destination/image-mars.webp'
import europaImg from '../assets/destination/image-europa.webp'
import titanImg from '../assets/destination/image-titan.webp'

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
