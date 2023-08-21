import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { CardCountry, DropdownSearch, InputSearch } from "../../components";
import { fetchPosts } from "../../store/services";
import { Country } from "../../types/CardCountry";
import { Store } from "../../types/store";

export const Home = () => {
  const dispatch = useDispatch();
  const {
    countries,
    countriesFilterDropdown,
    countriesFilterInput,
    isLoading,
    filterInput,
    filterDropdown,
  } = useSelector((state: Store) => state.main);

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(fetchPosts());
    }
  }, []);

  const getCountriesData = () => {
    if (filterInput) {
      return countriesFilterInput;
    }
    if (filterDropdown) {
      return countriesFilterDropdown;
    }
    return countries;
  };

  const countriesData = getCountriesData();

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <Container>
      <ContainerSearch>
        <InputSearch />
        <DropdownSearch />
      </ContainerSearch>
      <ContainerCards>
        {countriesData.map((card: Country, i: number) => (
          <CardCountry key={i} {...{ card }} />
        ))}
      </ContainerCards>
    </Container>
  );
};

const Container = styled.article`
  padding-left: 4rem;
  padding-right: 4rem;
  margin-top: 3rem;
  @media ${"(max-width:1007px)"} {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: space-between;
  @media ${"(max-width:1007px)"} {
    justify-content: center;
  }
`;

const ContainerSearch = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  @media ${"(max-width:1007px)"} {
    flex-direction: column;
    gap: 2rem;
  }
`;
