import { styled } from "styled-components";
import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../types/store";
import { Country } from "../../types/CardCountry";
import { useEffect } from "react";
import { fetchPosts } from "../../store/services";
import { selectFilterByInput } from "../../store/mainSlice";

const DATA_DETAIL = (object: Country) => {
  return [
    {
      name: "Native Name",
      value: object.nativeName,
    },
    {
      name: "Population",
      value: object.population,
    },
    {
      name: "Region",
      value: object.region,
    },
    {
      name: "Sub Region",
      value: object.subregion,
    },
    {
      name: "Capital",
      value: object.capital,
    },
    {
      name: "Native Name",
      value: object.nativeName,
    },
  ];
};

const DATA_DETAIL_RIGHT = (object: Country) => {
  return [
    {
      name: "Top Level Domain",
      value: object.topLevelDomain,
    },
    {
      name: "Currencies",
      value: object?.currencies && object?.currencies[0].name,
    },
    {
      name: "Languages",
      value: object.languages.map((entry: any) => entry.name).join(", "),
    },
  ];
};

const DetailCountry = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { countries, isLoading } = useSelector((state: Store) => state.main);
  const detail: Country | undefined = countries.find(
    (country: Country) => country.numericCode === params.id
  );

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(fetchPosts());
    }
  }, []);

  const goBack = () => {
    dispatch(selectFilterByInput({ filter: null }));
    navigate("/");
  };

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <Container>
      <Button onClick={goBack}>
        <ArrowLeft />
        Back
      </Button>
      {detail && (
        <DetailCard>
          <Img src={detail.flag} alt="img-flag" />
          <ContainerDescription>
            <TextName>{detail.name}</TextName>
            <GridDetail>
              <InfoCountry>
                {DATA_DETAIL(detail).map((detail, i) => (
                  <ContainerText key={i}>
                    <TextBold>
                      {detail.name}:<Text>{detail.value}</Text>
                    </TextBold>
                  </ContainerText>
                ))}
              </InfoCountry>
              <DetailTopInfo>
                {DATA_DETAIL_RIGHT(detail).map((detail, i) => (
                  <ContainerText key={i}>
                    <TextBold>
                      {detail.name}:<Text>{detail.value}</Text>
                    </TextBold>
                  </ContainerText>
                ))}
              </DetailTopInfo>
            </GridDetail>
            {detail.borders && (
              <BorderCountries>
                <TextBold>Border Countries:</TextBold>
                <ContainerCardsBorders>
                  {detail.borders.map((border: string, i: number) => (
                    <CardBorders key={i}>
                      <Span>{border}</Span>
                    </CardBorders>
                  ))}
                </ContainerCardsBorders>
              </BorderCountries>
            )}
          </ContainerDescription>
        </DetailCard>
      )}
    </Container>
  );
};

const Container = styled.article`
  padding: 4rem;
  display: flex;
  background-color: ${({ theme }) => theme.primary};
  flex-direction: column;
`;

const Button = styled.button`
  width: 7rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border: none;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.secundary};
  font-family: "Nunito-Sans-Semibold";
  cursor: pointer;
  &:hover {
    scale: 1.1;
  }
`;

const ArrowLeft = styled(ArrowLongLeftIcon)`
  width: 1rem;
`;

const ContainerDescription = styled.div`
  padding-top: 2rem;
  padding-left: 3rem;
  @media ${"(max-width:1007px)"} {
    padding-left: 0;
  }
`;

const DetailCard = styled.div`
  margin-top: 4rem;
  display: flex;
  gap: 3rem;
  @media ${"(max-width:1250px)"} {
    flex-direction: column;
  }
`;

const Img = styled.img`
  border-radius: 5px;
  max-width: 100%;
  height: auto;
  display: block;
  width: 30rem;
  height: 20rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;
const InfoCountry = styled.div`
  display: flex;
  flex-direction: column;
  @media ${"(max-width:1250px)"} {
    margin-top: 0.1rem;
    padding-left: 0rem;
  }
`;
const ContainerText = styled.div`
  margin-top: 0.5rem;
`;
const TextName = styled.span`
  font-size: 1.5rem;
  font-family: "Nunito-Sans-Bold";
`;
const TextBold = styled.span`
  font-family: "Nunito-Sans-Bold";
  font-size: 0.75rem;
`;
const Text = styled.span`
  font-family: "Nunito-Sans";
  font-size: 0.75rem;
  margin-left: 0.2rem;
`;

const Span = styled.span`
  font-family: "Nunito-Sans";
  font-size: 0.75rem;
`;
const GridDetail = styled.div`
  display: flex;
  gap: 3rem;
  margin-top: 2rem;
  @media ${"(max-width:1007px)"} {
    flex-direction: column;
  }
`;
const DetailTopInfo = styled.div`
  display: flex;
  flex-direction: column;
  @media ${"(max-width:1007px)"} {
    margin-top: 0.1rem;
    padding-left: 0rem;
  }
`;
const BorderCountries = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
`;
const CardBorders = styled.div`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  min-width: 6rem;
  height: 1.5rem;
  display: flex;
  background-color: ${({ theme }) => theme.secundary};
  justify-content: center;
  align-items: center;
`;

const ContainerCardsBorders = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-left: 0.5rem;
  flex-wrap: wrap;
`;

export default DetailCountry;
