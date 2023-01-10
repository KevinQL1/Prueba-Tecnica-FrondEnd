import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export const NavBar = () => {

  return (
    <div id="containerNavBar" className="mx-5 my-4">
      <Navbar id="NavBar" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to={"/"}>
            Prueba Técnica
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to={"/"}>
                Inicio
              </Nav.Link>

              <Nav.Link as={Link} to={"/employee/all"}>
                Empleados
              </Nav.Link>

              <Nav.Link as={Link} to={"/solicitude/all"}>
                Solicitudes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
