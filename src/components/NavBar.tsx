import { HStack, Image } from "@chakra-ui/react";
import imgLogo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface ISearchInput {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: ISearchInput) => {
  return (
    <HStack padding={4} justifyContent={"space-between"}>
      <Image src={imgLogo} boxSize={10} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
