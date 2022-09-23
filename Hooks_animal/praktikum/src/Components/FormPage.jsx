import React from "react";
import { Button, Form, Stack } from "react-bootstrap";

const FormPage = (
  {
    email,
    name,
    password,
    isPasswordError,
    handleChange,
    handleSubmit
  }
) => {
  return (
    <Stack gap={2}>
      <h2>Form Page</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex flex-column align-items-start">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            value={name}
            onChange={(ev) => handleChange(ev)}
            required
            placeholder="ex: namamu"
          />
        </Form.Group>
        <Form.Group className="mb-3 d-flex flex-column align-items-start">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            value={email}
            onChange={(ev) => handleChange(ev)}
            required
            placeholder="ex: hahaha@gmail.com"
          />
        </Form.Group>
        <Form.Group className="mb-3 d-flex flex-column align-items-start" >
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            value={password}
            required
            onChange={(ev) => handleChange(ev)}
          />
          {
            isPasswordError && (
              <Form.Text className="text-error">
                Password tidak sesuai yang diinginkan. Password harus lebih dari 5 karakter
              </Form.Text>
            )
          }
        </Form.Group>
        <Form.Group className="mb-3 d-flex flex-column align-items-start" >
          <Form.Label>Gender</Form.Label>
          <Stack gap={2} direction="horizontal">
          <Form.Check
            name="gender"
            type="radio"
            label="laki-laki"
            value="L"
            required
            onChange={(ev) => handleChange(ev)}
          />
          <Form.Check
            name="gender"
            type="radio"
            label="Perempuan"
            value="P"
            required
            onChange={(ev) => handleChange(ev)}
          />
          <Form.Group className="mb-3 d-flex flex-column align-items-start" >
          <Form.Label>Hobby</Form.Label>
          <Stack gap={2} direction="horizontal">
          <Form.Check
            name="hobby"
            type="flexbox"
            label="laki-laki"
            value="L"
            required
            onChange={(ev) => handleChange(ev)}
          />
          </Stack>
          
        </Form.Group>
        <Button variant="success" type="submit" disabled={isPasswordError}>
          Submit
        </Button>
      </Form>
    </Stack>
  )
}

export default FormPage;
