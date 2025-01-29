import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 113px;
  height: 82px;
`;

export const WrapperMenu = styled.div`
  height: 100%;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ItemMenu = styled(Link)`
  color: black;
  padding: 28px 9px;
  font-size: 22px;
  font-weight: 500;
`;
