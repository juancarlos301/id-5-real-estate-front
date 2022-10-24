import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;
export const Title = styled.h1`
  margin: 150px 0 0;
  letter-spacing: -1px;
`;
export const SecondTitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  opacity: 60%;
  margin: 4px 0 28px;
`;
export const Input = styled.input`
  padding: 14px 8px;
  border-radius: 10px;
  opacity: 90%;
  border: 1px solid #b6b6b6;
  margin-bottom: 10px;
`;
export const Button = styled.button`
  padding: 14px 12px;
  border-radius: 10px;
  opacity: 70%;
  border: 1px solid #b6b6b6;
  margin-bottom: 15px;
  cursor: pointer;
`;
export const Paragraph = styled.p`
  text-align: center;
  opacity: 70%;
  margin-bottom: 30px;
  font-size: 14px;
`;
export const Register = styled.a`
  color: #000;
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;

`
export const ErrorStyle = styled.span`
    text-align: center;
    background-color: #c61f1f;
    padding: 5px 10px;
    color: white;
    margin: 5px 0 10px;
    border-radius: 10px;
`
