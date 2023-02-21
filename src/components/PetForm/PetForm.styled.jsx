import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Form = styled.form`
width: 400px;
display: flex;
flex-direction: column;
padding: 16px;
border: 1px solid rgb(59, 80, 151);
box-shadow: 5px 5px 5px rgb(63, 57, 57); 
border-radius: 4px;
margin-left: auto;
margin-right: auto;
margin-bottom: 10px;








  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    gap: 20px;
    margin-left: auto;
    margin-right: 0;
  }
`;

export const AuthNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px 28px;
`;
