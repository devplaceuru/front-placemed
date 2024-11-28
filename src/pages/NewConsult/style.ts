import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLOR.GRAY_200};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentForm = styled.div`
  width: 300px;
  margin-bottom: 18px;

  display: flex;
  flex-direction: column;
`;

export const ContentTitle = styled.div`
  width: 300px;
  margin: 34px 0 50px 0;
`;
export const Title = styled.label`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: 500;
`;

export const Text = styled.label`
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  font-weight: 400;
  margin-bottom: 8px;
`;

export const Input = styled.input`
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
  margin-top: 200px;
  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.COLOR.WHITE};
  background-color: ${({ theme }) => theme.COLOR.GRAY_400};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: 500;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;
