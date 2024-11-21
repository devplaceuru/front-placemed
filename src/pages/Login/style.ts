import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLOR.BLUE_950};
`;

export const ButtomNew = styled.button`
  width: 100px;
  height: 50px;
  background-color: ${({ theme }) => theme.COLOR.GRAY_300};
`;
