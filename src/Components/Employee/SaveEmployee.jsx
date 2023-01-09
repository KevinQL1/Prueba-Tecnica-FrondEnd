import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SaveEmployee() {
  const [solicitudeSave, setsolicitudeSave] = useState(" ");

  return (
    <Form className="mx-5">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>ID</Form.Label>
        <Form.Control
          type="number"
          onChange={(ev) => {
            ev.preventDefault();
            setsolicitudeSave(ev.target.value);
          }}
          placeholder="Ingrese un ID"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          onChange={(ev) => {
            ev.preventDefault();
            setsolicitudeSave(ev.target.value);
          }}
          placeholder="Ingrese un NOMBRE"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Fecha</Form.Label>
        <Form.Control
          type="date"
          onChange={(ev) => {
            ev.preventDefault();
            setsolicitudeSave(ev.target.value);
          }}
          placeholder="Ingrese una FECHA"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Salario</Form.Label>
        <Form.Control
          type="number"
          name="salaryEmplo"
          onChange={(ev) => {
            ev.preventDefault();
            setsolicitudeSave(ev.target.value);
          }}
          placeholder="Ingrese el SALARIO"
        />
      </Form.Group>

      <Button variant="primary" type="submit" href="/employee/">
        Submit
      </Button>
      <p>resultado:{solicitudeSave}</p>
    </Form>
  );
}

export default SaveEmployee;
