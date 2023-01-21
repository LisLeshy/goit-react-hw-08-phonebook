import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import { FaEnvelope, FaLock } from 'react-icons/fa';
import { FormContainer, Label, Title, Input, Button } from './LoginView.styled';

function LoginView() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
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
          <Title>Your Email</Title>
          <FaEnvelope size="30" />
          <Input name="email" type="email" />
        </Label>
        <Label>
          <Title>Password</Title>
          <FaLock size="30" />
          <Input name="password" type="password" />
        </Label>

        <Button type="submit">Log in</Button>
      </FormContainer>
    </form>
  );
}

export default LoginView;
