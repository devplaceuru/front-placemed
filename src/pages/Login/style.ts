import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLOR.GRAY_200};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 769px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const Image = styled.img`
  width: 211px;
  height: 151px;
  margin-top: 24px;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const BtnNewQuery = styled(Link)`
  width: 300px;
  height: 58px;
  margin: 154px 45px 30px 45px;
  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.COLOR.WHITE};
  background-color: ${({ theme }) => theme.COLOR.BLUE_500};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: 500;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.5);
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    display: none;
  }

  @media screen and (min-width: 769px) {
    width: 306px;
    height: 347px;
    border-radius: 12px;
    box-shadow: none;
    font-size: 24px;
    margin: 0 45px 30px 45px;

    flex-direction: column;
    gap: 26px;

    svg {
      display: flex;
    }
  }
`;

export const BtnViewQuery = styled(Link)`
  width: 300px;
  height: 58px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.COLOR.WHITE};
  background-color: ${({ theme }) => theme.COLOR.GRAY_600};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: 500;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const BtnViewConsultConfirm = styled(Link)`
  width: 300px;
  height: 58px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.COLOR.WHITE};
  background-color: ${({ theme }) => theme.COLOR.GRAY_400};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: 500;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.5);

  display: none;

  @media screen and (min-width: 769px) {
    width: 306px;
    height: 347px;
    border-radius: 12px;
    box-shadow: none;
    font-size: 24px;
    margin: 0 45px 30px 45px;

    flex-direction: column;
    gap: 26px;

    svg {
      display: flex;
    }

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
