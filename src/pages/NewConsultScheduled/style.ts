import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLOR.GRAY_200};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.label`
  width: 300px;
  margin: 37px 0 39px 0;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: 500;
  align-items: normal;
`;

export const Message = styled.p`
  width: 300px;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: 400;
  align-items: normal;
  text-align: justify;
`;

export const BtnHome = styled.button`
  width: 300px;
  height: 58px;
  margin-top: 540px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: ${({ theme }) => theme.COLOR.WHITE};
  background-color: ${({ theme }) => theme.COLOR.BLUE_500};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: 500;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.5);
`;
