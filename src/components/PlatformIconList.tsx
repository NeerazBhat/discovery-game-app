import { HStack, Icon } from "@chakra-ui/react";
import { IPlatform } from "../hooks/useGames";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaAndroid,
  FaLinux,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface IPlatformIcon {
  platforms: IPlatform[];
}

const PlatformIconList = ({ platforms }: IPlatformIcon) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    android: FaAndroid,
    linux: FaLinux,
    web: BsGlobe,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
  };
  return (
    <HStack marginTop={1}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
