import { BrowserRouter, Route, Routes } from "react-router-dom";
import Employee from "./Components/EmployeeService/Employee";
import SaveEmployee from "./Components/EmployeeService/SaveEmployee";
import NavBar from "./Components/NavBar";
import FindSolicitude from "./Components/SolicitudeService/FindSolicitude";
import SaveSolicitude from "./Components/SolicitudeService/SaveSolicitude";
import Solicitude from "./Components/SolicitudeService/Solicitude";
import Welcome from "./Components/Welcome";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/employee/all" element={<Employee/>} />
        <Route path="/employee/:idSolicitude" element={<Employee/>}/>
        <Route path="/employee/save" element={<SaveEmployee/>} />
        <Route path="/solicitude/all" element={<Solicitude/>} />
        <Route path="/solicitude/:idSolicitude" element={<FindSolicitude/>}/>
        <Route path="/solicitude/save" element={<SaveSolicitude/>} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
