import { Countries } from "./CardCountry";

export interface Store {
  main: Main;
}

export interface Main {
  isDarkMode: boolean;
  filterDropdown: { id?: string; name: string } | null;
  filterInput: { name: string } | null;
  countries: Countries;
  isLoading: boolean;
  countriesFilterDropdown: Countries;
  countriesFilterInput: Countries;
}
