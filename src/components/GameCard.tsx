import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Image,
} from "@chakra-ui/react";
import { IGame } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface IGameCard {
  game: IGame;
}

const GameCard = ({ game }: IGameCard) => {
  return (
    <Card overflow={"hidden"}>
      <Image
        src={game.background_image}
        height={200}
        width={"100%"}
        objectFit={"cover"}
      />
      <CardBody padding={0}>
        <CardHeader>
          <Heading as={"h4"} size={"md"}>
            {game.name}
          </Heading>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
        </CardHeader>
      </CardBody>
    </Card>
  );
};

export default GameCard;
