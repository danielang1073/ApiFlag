import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Country } from "../../types/CardCountry";

type Props = {
  card: Country;
};

export const CardCountry = ({ card }: Props) => {
  const navigate = useNavigate();
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    navigate(`/detailcountry/${card.numericCode}`);
  };

  return (
    <Container onClick={handleClick}>
      <Img src={card.flag} alt="img-flag" />
      <ContainerText>
        <H3>{card.name}</H3>
        <TextBold>
          Population: <Text>{card.population}</Text>
        </TextBold>
        <TextBold>
          Region: <Text>{card.region}</Text>
        </TextBold>
        <TextBold>
          Capital: <Text>{card.capital}</Text>
        </TextBold>
      </ContainerText>
    </Container>
  );
};

const Container = styled.article`
  border-radius: 5px;
  width: 18rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: ${({ theme }) => theme.secundary};
  cursor: pointer;
  &:hover {
    scale: 1.1;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 200px;
`;

const ContainerText = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
`;

const TextBold = styled.span`
  font-family: "Nunito-Sans-Bold";
  font-size: 0.75rem;
`;

const Text = styled.span`
  font-family: "Nunito-Sans";
  font-size: 0.75rem;
`;

const H3 = styled.h3`
  margin: 0;
`;
