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
  margin-bottom: 117px;
`;

export const ContentData = styled.div`
  width: 300px;
  margin-bottom: 18px;

  display: flex;
  flex-direction: column;
`;

export const Text = styled.label`
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  font-weight: 400;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 300px;
  height: 42px;
  border: none;
  border-radius: 8px;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.COLOR.WHITE};

  &:focus {
    background-color: ${({ theme }) => theme.COLOR.GRAY_400};
    outline: none;
  }
`;

export const BtnNext = styled.button`
  width: 300px;
  height: 58px;
  margin-top: 370px;
  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.COLOR.WHITE};
  background-color: ${({ theme }) => theme.COLOR.GRAY_400};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: 500;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.5);
`;
