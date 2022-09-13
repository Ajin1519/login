import Dashboard from './pages/Dashboard';
import Navbar from './pages/Navbar';
import {Routes,Route} from "react-router-dom";
import Guest from './pages/Guest';
function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/guest' element={<Guest/>} />
    </Routes>
    </>
  );
}

export default App;
