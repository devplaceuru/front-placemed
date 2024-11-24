import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(0, 0, 0, 0.7);
  z-index: 1000;
`;

export const Content = styled.div`
  width: 300px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  background-color: #fff;
  border-radius: 10px;
  color: black;
`;

export const ContentRadio = styled.div`
  width: 270px;
  padding: 11px 18px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.label`
  margin-bottom: 17px;
  padding: 5px;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: 600;
`;

export const TitleRadio = styled.label`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: 400;
`;

export const Input = styled.input`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 8px;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.COLOR.WHITE};
`;
