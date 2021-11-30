import React,{ useState } from 'react';
import Allflights from "./components/Allflights/Allflights";
import Homepage from "./Pages/Homepage/Homepage";
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import Destination from "./components/Destination/Destination";
import BookingDetails from "./components/bookingDetail/BookingDetails";
import AllBooking from "./components/allbooking/AllBooking";
import Signup from "./Pages/Signup/Signup";
import Signin from "./Pages/Signin/Signin";

export const context = React.createContext();

function App() {

  const [log, setLog] = useState(false);

  return (
  
    <BrowserRouter>
        <context.Provider value={[log, setLog]} >
      <Routes>
          <Route exact path="/" element={ <Signin /> } /> 
          <Route exact path="/Signup" element={<Signup/>} />
          <Route exact path="/homepage" element={ <Homepage /> }/>
          <Route exact path="/flights" element={ <Allflights />} />
          <Route exact path="/destination" element={ <Destination /> } />
          <Route exact path="/bookingdetails" element={ <BookingDetails /> } />
          <Route exact path="/allbooking" element={ <AllBooking /> } />
      </Routes>
        </context.Provider>
    </BrowserRouter>     
    
  );
}

export default App;
