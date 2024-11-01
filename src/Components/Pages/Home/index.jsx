import React, { useState } from 'react';
import { Container, Header, SecondHeader, CardContainer, Card, ImagemPequena, ImagemMari, TextContainer, ImagemCarrinho, ImagemJogo, Titulo } from './style';

export const Home = () => {
  const [card] = useState("");

  function entrarNaPagina() {
    alert("Navegar para outra página ou seção.");
  }

  return (
    <Container>
      <Header>
        <ImagemPequena src="/Foto/logo2.png" alt="Logo Pequena" />
        <h3>Olá, Mariana</h3>
      </Header>

      <SecondHeader>
        <ImagemMari src="/Foto/mari.png" alt="Perfil" />
        <TextContainer>
        <h3>Bem-vindo(a), Mariana!</h3>
        <h5>Clique abaixo e saiba mais sobre os novos planos de Sócio Torcedor com mais benefícios e vantagens</h5>
        <h5>CONHEÇA NOSSOS NOVOS PLANOS</h5>
        </TextContainer>
      </SecondHeader>

      
      <CardContainer>
        <Titulo>
      <h5>Meu Plano</h5>
        <Card>
          <ImagemCarrinho src="/Foto/carrinho.png" alt="Carro" />
          <h5>Você ainda não tem um plano.</h5>
          <h5>Clique aqui apara conhecer novos planos.</h5>
          <p>{card}</p>
        </Card>

        <h5>Meu Plano</h5>
        <Card>
          <h5>5 nov.</h5>
          <ImagemJogo src="/Foto/botxvasco.png" alt="jogo" />
          <h3>21:30</h3>
          <h5>BOTAFOGO X VASCO</h5>
          <h5> CAMPEONATO BRASILEIRO</h5>
          <h10>Estádio Nilton Santos</h10>
          <p>{card}</p>
        </Card>

        <h5>Meu Plano</h5>
        <Card>
          <h1>Bem-vindo(a)!</h1>
          <h5>Clique abaixo e saiba mais sobre os novos planos de Sócio Torcedor com mais benefícios e vantagens</h5>
          <p>{card}</p>
        </Card>

        <h5>Meu Plano</h5>
        <Card>
          <h1>Bem-vindo(a)!</h1>
          <h5>Clique abaixo e saiba mais sobre os novos planos de Sócio Torcedor com mais benefícios e vantagens</h5>
          <p>{card}</p>
        </Card>
        </Titulo>
      </CardContainer>
    </Container>
  );
};

export default Home;
