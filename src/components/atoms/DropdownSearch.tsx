import { useState } from "react";
import styled from "styled-components";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { selectFilterByDropdown } from "../../store/mainSlice";
import { Store } from "../../types/store";

const OPTIONS = [
  {
    id: "0",
    name: "Delete filter",
  },
  {
    id: "1",
    name: "Africa",
  },
  {
    id: "2",
    name: "Americas",
  },
  {
    id: "3",
    name: "Asia",
  },
  {
    id: "4",
    name: "Europe",
  },
  {
    id: "5",
    name: "Oceania",
  },
];

export const DropdownSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { filterDropdown } = useSelector((state: Store) => state.main);
  const dispatch = useDispatch();

  return (
    <article>
      <Select onClick={() => setIsOpen(!isOpen)}>
        <PlaceHolder>
          {filterDropdown ? filterDropdown.name : "Filter by Region"}
        </PlaceHolder>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
        {isOpen && (
          <ContainerOptions>
            {OPTIONS.map((option, i: number) => (
              <Option
                onClick={() =>
                  dispatch(
                    selectFilterByDropdown({
                      filter: option.id === "0" ? null : option,
                    })
                  )
                }
                key={i}
              >
                {option.name}
              </Option>
            ))}
          </ContainerOptions>
        )}
      </Select>
    </article>
  );
};

const Select = styled.div`
  position: relative;
  width: 10rem;
  height: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.secundary};
  border-radius: 0.2rem;
  cursor: pointer;
`;

const ContainerOptions = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  width: 10rem;
  background-color: ${({ theme }) => theme.secundary};
  border-radius: 0.2rem;
  top: 3.1rem;
  left: 0;
`;

const PlaceHolder = styled.span`
  font-size: 0.75rem;
`;

const ChevronDown = styled(ChevronDownIcon)`
  width: 1rem;
`;

const ChevronUp = styled(ChevronUpIcon)`
  width: 1rem;
`;

const Option = styled.span`
  padding: 0.5rem;
  padding-left: 1.5rem;
  font-family: "Nunito-Sans-Regular";
  font-size: 0.75rem;
  &:hover {
    background-color: ${({ theme }) => theme.primary};
  }
`;
