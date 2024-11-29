import styled from "styled-components";

interface Props {
  backgroundColor: string;
}

export const Container = styled.div`
  display: flex;
`;

export const Desktop = styled.div`
  width: 87%;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLOR.GRAY_200};
  padding: 32px 0 0 39px;
`;

export const Title = styled.span`
  font-weight: 500;
  font-size: 32px;
`;

export const ContentCards = styled.div`
  width: 90%;
  height: 108px;
  margin-top: 33px;
  display: flex;
  gap: 24px;
  border: 1px solid black;
`;

export const Card = styled.div<Props>`
  width: 330px;
  height: 100%;
  border-radius: 10px;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
`;

export const Icone = styled.div`
  width: 78px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 39px;
`;

export const DataCard = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TitleDataCard = styled.span`
  font-size: 24px;
  font-weight: 500;
  color: white;
  margin-left: 20px;
`;

export const CountDataCard = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: white;
  margin-left: 20px;
`;

export const ContentDatas = styled.div`
  border: 1px solid black;

  width: 90%;
  height: 620px;
  margin-top: 62px;
  display: flex;
  gap: 17px;
`;

export const CardPatientsConsults = styled.div`
  border: 1px solid black;

  width: 100%;
  height: 620px;
  background-color: white;
  border-radius: 10px;
`;
