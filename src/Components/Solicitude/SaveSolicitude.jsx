import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SaveSolicitude() {
  const [employeeSave, setEmployeeSave] = useState(" ");

  return (
    <Form className="mx-5">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>ID</Form.Label>
        <Form.Control
          type="number"
          onChange={(ev) => {
            ev.preventDefault();
            setEmployeeSave(ev.target.value);
          }}
          placeholder="Ingrese un ID"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Código</Form.Label>
        <Form.Control
          type="text"
          onChange={(ev) => {
            ev.preventDefault();
            setEmployeeSave(ev.target.value);
          }}
          placeholder="Ingrese un NOMBRE"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          type="text"
          onChange={(ev) => {
            ev.preventDefault();
            setEmployeeSave(ev.target.value);
          }}
          placeholder="Ingrese una FECHA"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Resumen</Form.Label>
        <Form.Control
          type="text"
          name="salaryEmplo"
          onChange={(ev) => {
            ev.preventDefault();
            setEmployeeSave(ev.target.value);
          }}
          placeholder="Ingrese el SALARIO"
        />
      </Form.Group>

      <Button variant="primary" type="submit" href="/employee/">
        Submit
      </Button>
      <p>resultado:{employeeSave}</p>
    </Form>
  );
}

export default SaveSolicitude;
