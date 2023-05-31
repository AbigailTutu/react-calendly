import { BrowserRouter } from 'react-router-dom'
import Navbar from "./Components/Navbar"
import Routing from './Components/Routing'

function App() {
  return (
    <BrowserRouter>
     <Navbar/>
    <Routing/>
    </BrowserRouter>
  );
}

export default App
