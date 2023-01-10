import axios from "axios";

export class EmployeeContext {
  baseUrl = "http://localhost:8080/employee/";

  getAllEmployee = async () => {
    return await axios.get(this.baseUrl + "all").then((res) => res.data);
  };

  saveAllEmployee = async (employee) => {
    return await axios.post(this.baseUrl + "save", employee).then((res) => res.data);
  };

  getByIdEmployee = async (id) => {
    return await axios.get(this.baseUrl + "find").then((res) => res.data.id === id);
  }
}

export default EmployeeContext;
