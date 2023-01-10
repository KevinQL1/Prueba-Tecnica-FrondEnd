import { Component } from "react";
import Table from "react-bootstrap/Table";
import EmployeeContext from "../Context/EmployeeContext";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export class Employee extends Component {
  constructor() {
    super();
    this.state = {
      Employee: [],
    };
    this.employeeContext = new EmployeeContext();
  }

  componentDidMount() {
    this.employeeContext.getAllEmployee().then((data) => {
      this.setState({ Employee: data });
    });
  }

  render() {
    return (
      <div className="mx-5">
        <Table id="containerTable" striped bordered hover variant="dark">
          <thead>
            <tr>
              <th id="btn" colSpan={5}>
                <h1 id="btn">Empleados</h1>
              </th>
            </tr>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Fecha de ingreso</th>
              <th>Salario</th>
            </tr>
          </thead>
          <tbody>
            {this.state.Employee.map((employees) => (
              <tr key={employees.id}>
                <td>{employees.id}</td>
                <td>{employees.name}</td>
                <td>{employees.entry_date}</td>
                <td>{employees.salary}</td>
              </tr>
            ))}
            <tr>
              <td colSpan={1}>
                <Button id="btn" as={Link} to={"/employee/save"}>
                  Crear Empleado
                </Button>
              </td>
              <td colSpan={3}>
                <Form className="d-flex">
                  <Form.Control
                    type="number"
                    placeholder="Buscar por ID"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button
                    variant="outline-primary"
                    type="sumbit"
                    as={Link}
                    to={"/employee/find"}
                  >
                    Buscar
                  </Button>
                </Form>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Employee;
