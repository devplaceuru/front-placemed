import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLOR.GRAY_200};

  display: flex;
  flex-direction: column;
`;

export const ContentData = styled.div`
  width: 300px;
  margin-bottom: 18px;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.label`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: 500;
  margin: 34px 0 50px 25px;
`;

export const Text = styled.label`
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  font-weight: 400;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  height: 42px;
  border: none;
  border-radius: 8px;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.COLOR.WHITE};
`;

export const BtnNext = styled.button`
  width: 300px;
  height: 58px;
  position: absolute;
  bottom: 38px;

  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.COLOR.WHITE};
  background-color: ${({ theme }) => theme.COLOR.GRAY_400};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: 500;
  box-shadow: 0 4px 10px #000000;
`;