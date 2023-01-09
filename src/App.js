import NavBar from "./Components/NavBar";
import Employee from "./Components/Employee/Employee";
import Solicitude from "./Components/Solicitude/Solicitude";
import SaveEmployee from "./Components/Employee/SaveEmployee";
import SaveSolicitude from "./Components/Solicitude/SaveSolicitude";

function App() {
  return (
    <div>
      <div className="my-5">
        <NavBar></NavBar>
      </div>
      <div className="my-5">
        <Employee></Employee>
      </div>
      <div className="my-5">
        <Solicitude></Solicitude>
      </div>
      <div className="my-5">
        <SaveEmployee></SaveEmployee>
      </div>
      <div className="my-5">
        <SaveSolicitude></SaveSolicitude>
      </div>
    </div>
  );
}

export default App;
