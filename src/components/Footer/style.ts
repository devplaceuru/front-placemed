import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 46px;
  background-color: ${({ theme }) => theme.COLOR.GRAY_950};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Title = styled.span`
  color: white;
  font-weight: 500;
  font-size: 24px;
`;
