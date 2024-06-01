import Home from "./pages/Home";
import About from "./pages/About";
import AppLayout from "./pages/layout";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Gallery from "./pages/Gallery";
import Rooms from "./pages/Rooms";
import Room from "./pages/Room";
import Appoinment from "./pages/Appoinment"
import Login from "./pages/Login";
import AdminDashBoard from "./pages/adminDashboard";


function App() {
  return (
    <BrowserRouter> 
      <Routes>
      <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about"  element={<About />} />
          <Route path="gallery"  element={<Gallery />} />
          <Route path="rooms"  element={<Rooms />} />
          <Route path="room"  element={<Room/>} />
          {/* Add more routes here */}
          <Route path="appoinment"  element={<Appoinment/>} />
       
          <Route  path="login"  element={<Login/>}></Route>
        <Route  path="admindashboard"  element={<AdminDashBoard/>}></Route>

        </Route>
       
      </Routes>

      
    </BrowserRouter>
  );
}

export default App;
