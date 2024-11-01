import React, { useState } from 'react';
import {
  Container, Header, SecondHeader, CardContainer, Card, ImagemPequena,
  ImagemMari, TextContainer, ImagemCarrinho, ImagemJogo, Titulo, ImagemCartao, Nav, NavLink, HomeHeader, CardSection
} from './style';

export const Home = () => {
  const [card] = useState("");

  return (
    <Container>
      <Header>
        <ImagemPequena src="/Foto/logo2.png" alt="Logo Pequena" />
        <h3>Olá, Mariana</h3>
      </Header>
      <HomeHeader>
        <Nav>
          <NavLink href="#">HOME</NavLink>
          <NavLink href="#">MINHA CONTA</NavLink>
          <NavLink href="#">PLANOS</NavLink>
          <NavLink href="#">INGRESSOS</NavLink>
          <NavLink href="#">PARCEIROS</NavLink>
          <NavLink href="#">EXPERIÊNCIAS</NavLink>
          <NavLink href="#">CONTEÚDO EXCLUSIVO</NavLink>
          <NavLink href="#">CONSTELAÇÃO</NavLink>
          <NavLink href="#">TRANSPARÊNCIA</NavLink>
          <NavLink href="#">ATENDIMENTO</NavLink>
        </Nav>
      </HomeHeader>

      <SecondHeader>
        <ImagemMari src="/Foto/mari.png" alt="Perfil" />
        <TextContainer>
          <h3>Bem-vindo(a), Mariana!</h3>
          <h5>Clique abaixo e saiba mais sobre os novos planos de Sócio Torcedor com mais benefícios e vantagens</h5>
          <h5>CONHEÇA NOSSOS NOVOS PLANOS</h5>
        </TextContainer>
      </SecondHeader>

      <CardContainer>
        <CardSection>
          <Titulo>MEU PLANO</Titulo>
          <Card>
            <ImagemCarrinho src="/Foto/carrinho.png" alt="Carro" />
            <h5>Você ainda não tem um plano.</h5>
            <h5>Clique aqui para conhecer novos planos.</h5>
            <p>{card}</p>
          </Card>
        </CardSection> 

        <CardSection>
          <Titulo>INGRESSOS</Titulo>
          <Card>
            <h5>5 nov.</h5>
            <ImagemJogo src="/Foto/botxvasco.png" alt="jogo" />
            <h3>21:30</h3>
            <h5>BOTAFOGO X VASCO</h5>
            <h5>CAMPEONATO BRASILEIRO</h5>
            <p>{card}</p>
          </Card>
        </CardSection> 

        <CardSection>
          <Titulo>CARTÕES-INGRESSO</Titulo>
          <Card>
            <ImagemCartao src="/Foto/cartao.png" alt="Cartão" />
            <h3>Você ainda não possui Cartões-ingresso ativos</h3>
            <p>{card}</p>
          </Card>
        </CardSection>

        <CardSection>
          <Titulo>EXPERIÊNCIAS</Titulo>
          <Card>
            <h1>Você ainda não possui pontos</h1>
            <p>{card}</p>
          </Card>
        </CardSection>
      </CardContainer>
    </Container>
  );
};

export default Home;
