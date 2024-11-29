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
  width: 90%;
  height: 620px;
  margin-top: 62px;
  display: flex;
  gap: 17px;
`;

export const CardPatientsConsults = styled.div`
  width: 100%;
  height: 620px;
  padding: 33px 35px 20px 35px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
`;

export const TitlePatientsConsults = styled.span`
  font-size: 24px;
  font-weight: 500;
`;

export const Table = styled.table`
  width: 100%;

  border-collapse: collapse;
  border-radius: 10px 10px 0 0;
  background-color: #172554;
  margin-top: 30px;
  table-layout: fixed;

  thead,
  tbody {
    display: flex;
    flex-direction: column;
  }
`;

export const Thead = styled.thead`
  color: white;

  tr {
    display: flex;
  }

  th {
    width: 100%;
    text-align: left;
    padding: 8px 0 8px 12px;
    letter-spacing: 0.1em;
  }
`;

export const Tbody = styled.tbody`
  width: 100%;
  background-color: #d9d9d9;

  height: 460px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
  }

  tr {
    display: flex;
  }

  tr:nth-child(even) {
    background-color: #e5e7eb;
  }

  td {
    width: 100%;
    color: black;
    font-size: 14px;
    padding: 5px 0 5px 12px;
  }
`;
