import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const FormComponent = ({createData}) => {
  //create initial state
  const [data, updateData] = useState({
    name: "",
    lastName: "",
    date: "",
  });

  ///create state error
  const [error, updateError] = useState(false);

  //onchange form
  const updateState = (e) => {
    // console.log(e.target.value);
    updateData({
      //copy array initial
      ...data,
      //save values
      [e.target.name]: e.target.value,
    });
  };

  //
  const { name, lastName, date } = data;

  //click the button
  const submitData = (e) => {
    e.preventDefault();
    //validate form
    if (name.trim() === "" || lastName.trim() === "" || date.trim() === "") {
      updateError(true);
      return;
    }
    //delete message error
    updateError(false);

    //asign id
    data.id=uuidv4();

    //create data
    createData(data)

    //reset form
    updateData({
      name: "",
      lastName: "",
      date: "",
    })
  };
  return (
    <Form onSubmit={submitData}>
      {error
        ? ["danger"].map((variant, idx) => (
            <Alert key={idx} variant={variant}>
              Todos los campos son obligatorios
            </Alert>
          ))
        : null}
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          onChange={updateState}
          value={name}
          placeholder="Enter Name"
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          name="lastName"
          onChange={updateState}
          value={lastName}
          placeholder="Enter Last Name"
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="date"
          name="date"
          value={date}
          onChange={updateState}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
  );
};

FormComponent.propTypes={
  createData: PropTypes.func.isRequired
}
export default FormComponent;
