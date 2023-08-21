import styled from "styled-components";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { ChangeEvent } from "react";
import { selectFilterByInput } from "../../store/mainSlice";

export const InputSearch = () => {
  const dispatch = useDispatch();
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!value) {
      dispatch(selectFilterByInput({ filter: null }));
      return;
    }
    dispatch(
      selectFilterByInput({
        filter: { name: value },
      })
    );
  };
  return (
    <Container>
      <IconSearch />
      <Input
        onChange={onChangeInput}
        type="text"
        placeholder="Search for a country..."
      />
    </Container>
  );
};

const Container = styled.article`
  position: relative;
`;

const Input = styled.input`
  width: 25rem;
  height: 3rem;
  border: none;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  padding-left: 4rem;
  outline: none;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.secundary};
  @media ${"(max-width:1007px)"} {
    width: 100%;
  }
`;

const IconSearch = styled(MagnifyingGlassIcon)`
  position: absolute;
  width: 1rem;
  top: 50%;
  left: 1.5rem;
  transform: translateY(-50%);
`;
