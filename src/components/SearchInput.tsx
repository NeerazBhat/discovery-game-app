import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface ISearchInput {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: ISearchInput) => {
  const searchRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (searchRef.current) onSearch(searchRef.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={searchRef}
          type="text"
          placeholder="Search games..."
          borderRadius={15}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
