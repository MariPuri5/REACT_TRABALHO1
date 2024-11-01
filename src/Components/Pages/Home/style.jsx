import styled from "styled-components";

export const Container = styled.div` 
  background-color: #b6b6b6; 
  display: flex;
  flex-direction: column; 
  align-items: center; 
  height: 200vh; 
`;

export const Header = styled.div`
  background-color: #000;  
  color: white;
  width: 100%;
  text-align: right;
  padding: 10px ;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0px;
`;
export const SecondHeader = styled.div`
  background-color: white;
  color: black;
  width: 100%;
  padding: 1px;
  display: flex;
  align-items: center;
  justify-content: flex-start; 
  gap: 30px; 
  margin-bottom: 20px;
`;
export const HomeHeader = styled.div`
  background-color: #000;  
  color: white;
  width: 100%;
  text-align: center;
  padding: 7px ;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2px;
  
`;

export const Nav = styled.nav`
  display: flex;
  gap: 15px;
  flex: 1;
`;

export const NavLink = styled.a`
  color: #fffdfd;
  font-size: 11px;
  font-weight: 500;
  text-decoration: none;
  padding: 8px 12px;
  /* transition: color 0.2s ease; */

  &:hover {
    color: #fff;
  }
`;

export const TextContainer = styled.div`
  display: auto;
  flex-direction: column;
  text-align: left;
`;

export const ImagemPequena = styled.img`
  width: 200px;
  height: auto;
  margin-top: 20px;
  align-self: left;
  margin-left: 20px;   
`;

export const ImagemJogo = styled.img`
  width: 200px;
  height: auto;
  margin-top: 1px;
`;

export const ImagemMari = styled.img`
  width: 70px;
  height: auto;
  margin-top: 20px;
  align-self: left; 
  margin-left: 20px; 
  border-radius: 100px;
`;

export const ImagemCarrinho = styled.img`
  width: 70px;
  height: auto;
  margin-top: 20px;
  align-self: left;  
  margin-left: 20px; 
  border-radius: 100px;
`;

export const ImagemCartao = styled.img`
  width: 70px;
  height: auto;
  margin-top: 20px;
  margin-left: 20px; 
  border-radius: 100px;
`;

export const CardContainer = styled.div`
  display: center;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  margin-top: 20px;
  width: 80%;
  padding-bottom: 20px;
  display: flex;
  /* padding-bottom: 20px;
  display: center;
  align-items: flex; 
  flex-direction: center ;  */
  /* overflow-x: auto;  */
`;

export const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 300px;
  text-align: center;
`;


export const Card = styled.div`
  background-color: #f8f8f8;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  flex: 1 1 200px;
  max-width: 300px;
  transition: transform 0.3s;
  overflow: hidden;
`;

export const Titulo = styled.div`
  padding: 10px;
  margin: 20px;
  text-align: left;
  margin-left: 20px; 
  width: 50%;  
`;

export const Button = styled.button`
  background-color: #282829;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;
  font-size: 1rem;
  font-weight: bold;
/* 
  &:hover {
    background-color: #007bff;
  } */
`;
