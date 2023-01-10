import { Component } from "react";
import Table from "react-bootstrap/Table";
import SolicitudeContext from "../Context/SolicitudeContext";
import Button from "react-bootstrap/Button";
import { Form } from "react-router-dom";
import { Link } from "react-router-dom";

export class FindSolicitude extends Component {
  constructor() {
    super();
    this.state = {
      Solicitude: [],
    };
    this.solicitudeContext = new SolicitudeContext();
  }

  findById(){
    this.solicitudeContext.getByIdSolicitude().then((data) => {
      this.setState({ Solicitude: data });
    });
  }

  render() {
    return (
      <div className="mx-5">
        <Table id="containerTable" striped bordered hover variant="dark">
          <thead>
          <tr>
              <th id="btn" colSpan={5}>
                <h1 id="btn">Solicitudes</h1>
              </th>
            </tr>
            <tr>
              <th>Id</th>
              <th>Código</th>
              <th>Descripción</th>
              <th>Resumen</th>
              <th>Nombre</th>
            </tr>
          </thead>
          <tbody>
            {this.state.Solicitude.map((solicitudes) => (
              <tr key={solicitudes.id}>
                <td>{solicitudes.id}</td>
                <td>{solicitudes.code}</td>
                <td>{solicitudes.description}</td>
                <td>{solicitudes.resumen}</td>
                <td>{solicitudes.employee.name}</td>
                {console.log(solicitudes)}
              </tr>
            ))}
            <tr>
            <td colSpan={2}>
                <Button id="btn" as={Link} to={"/solicitude/save"}>Crear Solictud</Button>
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
                    to={"/solcitude/find"}
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

export default FindSolicitude;
