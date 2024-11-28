import { Link } from "react-router-dom";
import {
  Container,
  ContentData,
  Area,
  Title,
  Title2,
  ListConsult,
  ListItem,
  BtnNext,
} from "./style";

import { PiMapPin, PiClockAfternoon, PiCaretDown } from "react-icons/pi";
import { useState } from "react";

interface Consult {
  specialty: string;
  unit: string;
  address: string;
  dateTime: string;
}

const queries: Consult[] = [
  {
    specialty: "Dermatologista",
    unit: "Unidade 2",
    address: "Rua Alegria, 123 - B. Flores",
    dateTime: "01/10/2024",
  },
  {
    specialty: "Dentista",
    unit: "Unidade 1",
    address: "Rua Sorriso, 456 - B. Sol Nascente",
    dateTime: "01/10/2024",
  },
  {
    specialty: "Ortopedista",
    unit: "Unidade 4",
    address: "Rua Stundup, 789 - B. Comédia",
    dateTime: "01/10/2024",
  },
];

export function ViewConsultConfirm() {
  const [onConsultDone, setOnConsultDone] = useState(false);

  return (
    <Container>
      <Title>Consultas Agendadas</Title>
      <ContentData>
        <div>
          <span className="specialty">Clínico Geral</span>
        </div>
        <div className="address">
          <PiMapPin size={24} />
          <span className="unit"> Unidade 1</span>
          <span className="complement">Rua Brasil, 001 - B. Floresta</span>
        </div>
        <div className="date">
          <PiClockAfternoon size={24} />
          <span className="time">28/11/2024 ás 8:00</span>
        </div>
      </ContentData>

      <Area
        isOn={onConsultDone}
        onClick={() => setOnConsultDone(!onConsultDone)}
      >
        <Title2>Consultas realizadas</Title2>
        <PiCaretDown size={24} />
      </Area>

      <ListConsult isOn={onConsultDone}>
        {queries.map((item, index) => (
          <ListItem key={index}>
            <div>
              <span className="specialty">{item.specialty}</span>
            </div>
            <div className="address">
              <PiMapPin size={24} />
              <span className="unit">{item.unit}</span>
              <span className="complement">{item.address}</span>
            </div>
            <div className="date">
              <PiClockAfternoon size={24} />
              <span className="time">{item.dateTime}</span>
            </div>
          </ListItem>
        ))}
      </ListConsult>

      <Link to={"/"}>
        <BtnNext>Próximo</BtnNext>
      </Link>
    </Container>
  );
}
