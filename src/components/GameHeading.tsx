import { Heading } from "@chakra-ui/react";
import { IGameQuery } from "../App";

interface IGameHeading {
  gameQuery: IGameQuery;
}

const GameHeading = ({ gameQuery }: IGameHeading) => {
  const heading = `${gameQuery.genre?.name || ""} ${
    gameQuery.platform?.name || ""
  } Games`;
  return (
    <Heading marginY={4} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
