import { HStack, Image } from "@chakra-ui/react";
import imgLogo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding={4} justifyContent={"space-between"}>
      <Image src={imgLogo} boxSize={10} />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
