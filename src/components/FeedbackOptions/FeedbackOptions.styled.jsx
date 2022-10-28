import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  width: 180px;
  height: 50px;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 16px;
  border-radius: 10px;
  outline: none;
  border: 1px solid black;
  cursor: pointer;
  transition: all 250ms linear;
  &:hover,
  &:focus {
    color: lightseagreen;
    box-shadow: 0px 0px 17px 6px lightseagreen;
  }
`;

const ButtonsItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
const ButtonsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
`;
export { Button, ButtonsList, ButtonsItem };
