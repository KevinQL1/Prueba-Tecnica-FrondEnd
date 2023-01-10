import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { Component } from "react";
import EmployeeContext from "../Context/EmployeeContext";

export class SaveEmployee extends Component {
  constructor() {
    super();
    this.state = {
      Employee: [],
    };
    this.save = this.save.bind(this);
    this.employeeContext = new EmployeeContext();
  }

  save() {
    this.employeeContext.saveAllEmployee(this.state.Employee)
      .then((data) => {
        this.setState({
          Employee: {
            id: null,
            name: null,
            entry_date: null,
            salary: null,
          },
        });
        swal({
          icon: "success",
          text: "Atención!",
          title: "Se guardó el nuevo empleado correctamente.",
        });
        this.employeeContext
          .getAllEmployee()
          .then((data) => this.setState({ Employee: data }));
      });
  }

  render() {
    return (
      <div
        as={Link}
        to={"/employee/save"}
        id="containerForm"
        className="mx-5 p-5"
      >
        <Form id="employee-form">
          <Form.Group className="mb-3">
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="number"
              name="id"
              placeholder="Ingrese un ID"
              value={this.state.Employee.id}
              onChange={(e) => {
                let val = e.target.value;
                this.setState((prevState) => {
                  let employee = Object.assign({}, prevState.employee);
                  employee.id = val;

                  return { employee };
                });
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese un NOMBRE"
              name="name"
              value={this.state.Employee.name}
              onChange={(e) => {
                let val = e.target.value;
                this.setState((prevState) => {
                  let employee = Object.assign({}, prevState.employee);
                  employee.name = val;

                  return { employee };
                });
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Fecha</Form.Label>
            <Form.Control
              type="date"
              name="entry_date"
              placeholder="Ingrese una FECHA"
              value={this.state.Employee.entry_date}
              onChange={(e) => {
                let val = e.target.value;
                this.setState((prevState) => {
                  let employee = Object.assign({}, prevState.entry_date);
                  employee.entry_date = val;

                  return { employee };
                });
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Salario</Form.Label>
            <Form.Control
              type="number"
              name="salary"
              placeholder="Ingrese un SALARIO"
              value={this.state.Employee.salary}
              onChange={(e) => {
                let val = e.target.value;
                this.setState((prevState) => {
                  let employee = Object.assign({}, prevState.employee);
                  employee.salary = val;

                  return { employee };
                });
              }}
            />
          </Form.Group>

          <Button variant="primary" onClick={this.save} type="submit" href="#">
            Guardar
          </Button>
        </Form>
      </div>
    );
  }

  showSaveDialog() {
    this.setState({
      Employee: {
        id: null,
        name: null,
        entry_date: null,
        salary: null,
      },
    });
    document.getElementById("employee-form").reset();
  }

  showEditDialog() {
    this.setState({
      Employee: {
        id: this.state.Employee.id,
        name: this.state.Employee.name,
        entry_date: this.state.Employee.entry_date,
        salary: this.state.Employee.salary,
      },
    });
  }
}

export default SaveEmployee;
