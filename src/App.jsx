import '@fontsource/barlow';
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import DestinationMoon from './pages/DestinationMoon';
import DestinationMars from './pages/DestinationMars';
import DestinationEuropa from './pages/DestinationEuropa';
import DestinationTitan from './pages/DestinationTitan';
import CrewDouglasHurley from './pages/CrewDouglasHurley';
import CrewMarkShuttleworth from './pages/CrewMarkShuttleworth';
import CrewVictorGlover from './pages/CrewVictorGlover';
import TechnologyLaunchVehicle from './pages/TechnologyLaunchVehicle';
import TechnologySpaceport from './pages/TechnologySpaceport';
import TechnologySpaceCapsule from './pages/TechnologySpaceCapsule'
import '@fontsource/bellefair'
import '@fontsource/barlow-condensed'


function App() {

  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/destination/moon" element={<DestinationMoon/>}/>
        <Route path="/destination/mars" element={<DestinationMars/>}/>
        <Route path="/destination/europa" element={<DestinationEuropa/>}/>
        <Route path="/destination/titan" element={<DestinationTitan/>}/>
        <Route path="/crew/douglas-hurley" element={<CrewDouglasHurley/>}/>
        <Route path="/crew/mark-shuttleworth" element={<CrewMarkShuttleworth/>}/>
        <Route path="/crew/victor-glover" element={<CrewVictorGlover/>}/>
        <Route path="/technology/launch-vehicle" element={<TechnologyLaunchVehicle/>}/>
        <Route path="/technology/spaceport" element={<TechnologySpaceport/>}/>
        <Route path="/technology/space-capsule" element={<TechnologySpaceCapsule/>}/>
      </Routes>
    </>
    
  )
}

export default App
