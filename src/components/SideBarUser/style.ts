import styled from "styled-components";

export const Container = styled.div`
  width: 264px;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLOR.BLUE_950};
  overflow: hidden;
  box-shadow: 6px 4px 4px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 211px;
  height: 151px;
  margin-top: 24px;
`;

export const Menu = styled.div`
  width: 264px;
  height: 100vh;
  padding-top: 50px;
`;

export const ItemsMenu = styled.ul`
  list-style-type: none;
`;

export const ItemMenu = styled.li`
  color: ${({ theme }) => theme.COLOR.GRAY_200};
  font-size: 18px;
  padding: 9px 0 9px 0;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    margin: 0 16px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.COLOR.GRAY_600};
  }
`;
