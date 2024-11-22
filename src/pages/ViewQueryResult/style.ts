import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLOR.GRAY_200};

  display: flex;
  flex-direction: column;
`;

export const ContentData = styled.div`
  height: 174px;
  padding: 16px 20px 0 20px;
  margin-left: 24px;
  margin-right: 24px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLOR.WHITE};

  display: flex;
  flex-direction: column;
`;

export const Title = styled.label`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: 500;
  margin: 34px 0 50px 32px;
`;

export const Text = styled.label`
  font-size: ${({ theme }) => theme.FONT_SIZE.XS};
  font-weight: 400;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 300px;
  height: 42px;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLOR.WHITE};
`;

export const BtnNext = styled.button`
  width: 300px;
  height: 58px;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 38px;

  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.COLOR.WHITE};
  background-color: ${({ theme }) => theme.COLOR.GRAY_400};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: 500;
  box-shadow: 0 4px 10px #000000;
`;