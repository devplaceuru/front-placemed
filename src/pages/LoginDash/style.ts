import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: gray;
  padding-top: 212px;
  padding-left: 140px;
`;

export const Content = styled.div`
  width: 550px;
  height: 600px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLOR.WHITE};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);

  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }
`;

export const Title = styled.label`
  width: 90%;
  font-weight: 500;
  margin-top: 25px;
  font-size: 32px;
`;

export const Form = styled.div`
  width: 90%;
  height: 200px;
  margin-top: 97px;

  input {
    width: 100%;
    font-size: 18px;
    font-weight: 400;
    border: none;

    font-size: 18px;
    font-weight: 400;
    line-height: 21.09px;
    text-align: left;
    margin-left: 20px;
  }

  .input-data {
    height: 58px;
    padding: 7px 16px 7px 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 8px;
    border: 1px solid black;
    margin-top: 10px;
    margin-bottom: 30px;
  }
`;

export const BtnLogin = styled.button`
  width: 100%;
  height: 52px;
  margin-top: 29px;

  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.COLOR.WHITE};
  background-color: ${({ theme }) => theme.COLOR.BLUE_500};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: 500;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

export const Pass = styled.label`
  font-size: 18px;
  margin-top: 43px;
  color: ${({ theme }) => theme.COLOR.BLUE_950};
  font-weight: 700;
  text-decoration: underline;
  text-decoration-style: solid;
  cursor: pointer;
`;
