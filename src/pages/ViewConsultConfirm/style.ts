import styled from "styled-components";

interface Props {
  isOn: boolean;
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLOR.GRAY_200};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentData = styled.div`
  width: 340px;
  padding: 16px 20px 0 20px;
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLOR.WHITE};

  display: flex;
  flex-direction: column;

  .specialty {
    font-size: 22px;
    font-weight: 400;
  }

  .address {
    margin-top: 15px;
    display: grid;
    grid-template-columns: auto auto;
  }

  .address svg {
    margin-top: 10px;
    margin-right: 10px;
    grid-area: 1 / 1 / 3 / 1;
  }

  .unit {
    width: 265px;
    grid-area: 1 / 2 / 1 / 2;
  }

  .complement {
    width: 265px;
    grid-area: 2 / 2 / 2 / 2;
  }

  .date {
    margin-top: 29px;
    margin-bottom: 29px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .date svg {
    margin-right: 10px;
  }

  .time {
    width: 265px;
  }
`;

export const Title = styled.label`
  width: 340px;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: 500;
  margin: 34px 0 50px 0;
`;

export const Text = styled.label`
  font-size: ${({ theme }) => theme.FONT_SIZE.XS};
  font-weight: 400;
  margin-bottom: 8px;
`;

export const Area = styled.div<Props>`
  width: 340px;
  margin-top: 23px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  svg {
    transform: rotate(${(props) => (!props.isOn ? 0 : -90)}deg);
    transition: 0.3s;
  }
`;

export const Title2 = styled.label`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  cursor: pointer;
`;

export const ListConsult = styled.div<Props>`
  width: 340px;
  height: ${(props) => (!props.isOn ? 0 : 440)}px;
  margin-top: 10px;
  visibility: ${(props) => (!props.isOn ? "hidden" : "visibility")};
  transition: 0.3s;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

export const ListItem = styled.div`
  width: 340px;
  padding: 16px 20px 0 20px;

  margin-bottom: 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLOR.WHITE};

  display: flex;
  flex-direction: column;

  .specialty {
    font-size: 22px;
    font-weight: 400;
  }

  .address {
    margin-top: 15px;
    display: grid;
    grid-template-columns: auto auto;
  }

  .address svg {
    margin-top: 10px;
    margin-right: 10px;
    grid-area: 1 / 1 / 3 / 1;
  }

  .unit {
    width: 265px;
    grid-area: 1 / 2 / 1 / 2;
  }

  .complement {
    width: 265px;
    grid-area: 2 / 2 / 2 / 2;
  }

  .date {
    margin-top: 29px;
    margin-bottom: 29px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .date svg {
    margin-right: 10px;
  }

  .time {
    width: 265px;
  }
`;

export const BtnNext = styled.button`
  width: 300px;
  height: 58px;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 38px;

  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.COLOR.WHITE};
  background-color: ${({ theme }) => theme.COLOR.GRAY_400};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: 500;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;
