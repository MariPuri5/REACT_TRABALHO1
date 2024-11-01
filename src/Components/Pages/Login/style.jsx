import styled from "styled-components";

export const Container = styled.div` 
  background-color: white; 
  display: flex;
  flex-direction: column; 
  align-items: center; 
  height: 100vh; 
`;

export const Header = styled.div`
  background-color: #000;  
  color: white;
  width: 100%;
  text-align: right;
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;


export const ImagemGrande = styled.img`
  width: 400px; 
  height: auto;
  margin-bottom: 20px;
  border-radius: 10px;
`;

export const ImagemPequena = styled.img`
  width: 200px;
  height: auto;
  margin-top: 20px;
  align-self: left; 
  margin-left: 20px; 
`;

export const LoginContainer = styled.div` 
  text-align: center; 
  margin-top: 1%; 

`;

export const InputField = styled.input` 
width: 100%;
padding: 10px;
margin-top: 10x;
border: 1px solid #ccc;
border-radius: 3px;
box-shadow: 0px 4px 8px rgba(252, 248, 248, 0.1); 
outline: none;
margin-bottom: 5px;
font-size: 1rem;
`;


export const Button = styled.button`
  margin-top: 1%
  width: 100%;
  padding: 10px;
  margin-top: 15px;
  border: none;
  border-radius: 5px;
  background-color: #282829;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;
 



