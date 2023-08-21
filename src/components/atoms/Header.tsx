import styled from "styled-components";
import { MoonIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { toggleDarkMode } from "../../store/mainSlice";

export const Header = () => {
  const dispatch = useDispatch();
  return (
    <ContainerHeader>
      <H2>Where in the world?</H2>
      <ContainerMoon onClick={() => dispatch(toggleDarkMode())}>
        <MoonStyled />
        <Span>Dark mode</Span>
      </ContainerMoon>
    </ContainerHeader>
  );
};

const ContainerHeader = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.secundary};
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 4rem;
  padding-right: 4rem;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  @media ${"(max-width:1007px)"} {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const H2 = styled.h2`
  margin: 0;
  @media ${"(max-width:1007px)"} {
    font-size: 0.75rem;
  }
`;

const Span = styled.span`
  @media ${"(max-width:1007px)"} {
    font-size: 0.75rem;
  }
`;

const MoonStyled = styled(MoonIcon)`
  width: 1.5rem;
`;

const ContainerMoon = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;
`;
