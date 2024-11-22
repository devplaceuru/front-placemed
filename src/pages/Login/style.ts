import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLOR.GRAY_200};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 211px;
  height: 151px;
  margin-top: 24px;
`;

export const BtnNewQuery = styled.button`
  width: 300px;
  height: 58px;
  margin: 154px 45px 30px 45px;

  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.COLOR.WHITE};
  background-color: ${({ theme }) => theme.COLOR.BLUE_500};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  font-weight: 500;
  box-shadow: 0 4px 10px #000000;
`;

export const BtnViewQuery = styled.button`
  width: 300px;
  height: 58px;

  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.COLOR.WHITE};
  background-color: ${({ theme }) => theme.COLOR.GRAY_600};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  font-weight: 500;
  box-shadow: 0 4px 10px #000000;
`;
