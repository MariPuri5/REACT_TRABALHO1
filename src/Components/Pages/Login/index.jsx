import React, { useState } from 'react';
import { Container, Header, LoginContainer, InputField, Button, ImagemGrande, ImagemPequena } from './style';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert('Login');
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <Container>
      <Header>
        <ImagemPequena src="/Foto/logo2.png" alt="Logo Pequena" />
        <h3>Login | Cadastre-se</h3>
      </Header>

      <ImagemGrande src="/Foto/logo.png" alt="Logo Grande" />

      <LoginContainer>
        <h2>Faça login e entre na sua conta</h2>
        <form onSubmit={handleLogin}>
          <div>
            <InputField
              placeholder="Email/CPF"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <InputField
              placeholder="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <h5>Desejo me manter conectado</h5>
            <h7> Gerar nova senha </h7>
          </div>
          
          <Button type="submit">ENTRAR</Button>
          <h2>OU</h2>          
          <Button type="button" onClick={() => alert('Login com Facebank')}>CONTINUAR COM A CONTA FACEBANK</Button>
        </form>

        <h5>Ainda não é sócio? Clique aqui e cadastre-se!</h5>
      </LoginContainer>
    </Container>
  );
};

export default Login;
