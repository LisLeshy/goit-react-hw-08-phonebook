import React from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { FormContainer, Button, Input, Label, Title } from './Register.styled';

function Register() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormContainer>
        <Label>
          <Title>Your Name</Title>
          <FaUser size="30" />
          <Input name="name" type="text" />
        </Label>
        <Label>
          <Title>Your Email</Title>
          <FaEnvelope size="30" />
          <Input name="email" type="email" />
        </Label>
        <Label>
          <Title>Password</Title>
          <FaLock size="30" />
          <Input name="password" type="password" />
        </Label>

        <Button type="submit">Sign up</Button>
      </FormContainer>
    </form>
  );
}

export default Register;
