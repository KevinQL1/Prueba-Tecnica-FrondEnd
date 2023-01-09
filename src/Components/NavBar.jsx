import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export const NavBar = () => {
  const [idSolicitude, setIdSolicitude] = useState("");
  
  return (
    <div className="mx-5 my-4">
      <Navbar id="NavBar" expand="lg">
        <Container fluid>
          <Navbar.Brand>Preuba Técnica</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown title="Empleados" id="nav-dropdown">
                <NavDropdown.Item href="/employee/save" eventKey="4.1">
                  Crear un nuevo empleado
                </NavDropdown.Item>
                <NavDropdown.Item href="/employee/" eventKey="4.2">
                  Ver empleados
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Solicitudes" id="nav-dropdown">
                <NavDropdown.Item href="/solicitude/save" eventKey="4.1">
                  Crear una nueva solicitud
                </NavDropdown.Item>
                <NavDropdown.Item href="/solicitude/" eventKey="4.2">
                  Ver solicitudes
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="number"
                placeholder="Buscar por ID"
                className="me-2"
                aria-label="Search"
                name="idSolicitude"
                value={idSolicitude}
                onChange={(ev) => {
                  ev.preventDefault();
                  setIdSolicitude(ev.target.value);
                }}
              />
              <Button
                variant="outline-primary"
                type="sumbit"
                href="/solicitude/?id"
              >
                Buscar
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
        <p>Resultado: {idSolicitude}</p>
      </Navbar>
    </div>
  );
};

export default NavBar;
