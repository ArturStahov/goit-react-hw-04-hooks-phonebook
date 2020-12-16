import styled from 'styled-components';

const Form = styled.form`
  max-width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const FormLabel = styled.label`
  width: 85%;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-around;
`;
const Button = styled.button`
  padding: 5px 10px;
  max-width: 250px;
  height: 40px;
  background-color: green;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export { Form, FormLabel, Button };
