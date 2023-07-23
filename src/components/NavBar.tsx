import { HStack, Image, Text } from "@chakra-ui/react";
import imgLogo from "../assets/react.svg";

const NavBar = () => {
  return (
    <HStack padding={4}>
      <Image src={imgLogo} boxSize={10} />
      <Text>Navbar</Text>
    </HStack>
  );
};

export default NavBar;
