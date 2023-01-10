import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import SolicitudeContext from "../Context/SolicitudeContext";
import swal from "sweetalert";
import { Component } from "react";
import EmployeeContext from "../Context/EmployeeContext";

export class SaveSolicitude extends Component {
  constructor() {
    super();
    this.state = {
      Solicitude: [],
      Employee: [],
    };
    this.save = this.save.bind(this);
    this.solicitudeContext = new SolicitudeContext();
    this.employeeContext = new EmployeeContext();
  }

  componentDidMount() {
    this.employeeContext.getAllEmployee().then((data) => {
      this.setState({ Employee: data });
    });
  }

  save() {
    this.solicitudeContext
      .saveAllSolicitude(this.state.Solicitude)
      .then((data) => {
        this.setState({
          Solicitude: {
            id: null,
            code: null,
            description: null,
            resumen: null,
            id_employee: { id: null },
          },
        });
        swal({
          icon: "success",
          text: "Atención!",
          title: "Se guardó la nueva solicitud correctamente.",
        });
        this.solicitudeContext
          .getAllSolicitude()
          .then((data) => this.setState({ Solicitude: data }));
      });
  }

  render() {
    return (
      <div
        as={Link}
        to={"/solicitude/save"}
        id="containerForm"
        className="mx-5 p-5"
      >
        <Form id="solicitude-form">
          <Form.Group className="mb-3">
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="number"
              name="id"
              placeholder="Ingrese un ID"
              value={this.state.Solicitude.id}
              onChange={(e) => {
                let val = e.target.value;
                this.setState((prevState) => {
                  let solicitude = Object.assign({}, prevState.solicitude);
                  solicitude.id = val;

                  return { solicitude };
                });
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Código</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese un CODIGO, ejemplo: A1"
              name="code"
              value={this.state.Solicitude.code}
              onChange={(e) => {
                let val = e.target.value;
                this.setState((prevState) => {
                  let solicitude = Object.assign({}, prevState.solicitude);
                  solicitude.code = val;

                  return { solicitude };
                });
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              type="text"
              name="description"
              placeholder="Ingrese una DESCRIPCION"
              value={this.state.Solicitude.description}
              onChange={(e) => {
                let val = e.target.value;
                this.setState((prevState) => {
                  let solicitude = Object.assign({}, prevState.solicitude);
                  solicitude.description = val;

                  return { solicitude };
                });
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Resumen</Form.Label>
            <Form.Control
              type="text"
              name="resumen"
              placeholder="Ingrese un RESUMEN de su solicitud"
              value={this.state.Solicitude.resumen}
              onChange={(e) => {
                let val = e.target.value;
                this.setState((prevState) => {
                  let solicitude = Object.assign({}, prevState.solicitude);
                  solicitude.resumen = val;

                  return { solicitude };
                });
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Empleado</Form.Label>
            <Form.Select>
              <option>Seleccione un empleado...</option>
              {this.state.Employee.map((employees) => (
                <option
                  name="id_employee"
                  key={employees.id}
                  value={this.state.Solicitude.id_employee}
                  onChange={(e) => {
                    let val = e.target.value;
                    this.setState((prevState) => {
                      let solicitude = Object.assign({}, prevState.solicitude);
                      solicitude.id_employee = val;

                      return { solicitude };
                    });
                  }}
                >
                  {employees.id}
                </option>
              ))}
            </Form.Select>
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
      Solicitude: {
        id: null,
        code: null,
        description: null,
        resumen: null,
        id_employee: { id: null },
      },
    });
    document.getElementById("solicitude-form").reset();
  }

  showEditDialog() {
    this.setState({
      Solicitude: {
        id: this.state.Solicitude.id,
        code: this.state.Solicitude.code,
        description: this.state.Solicitude.description,
        resume: this.state.Solicitude.resume,
        id_employee: {
          id: this.state.Solicitude.id_employee,
        },
      },
    });
  }
}

export default SaveSolicitude;
