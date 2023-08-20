import {
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  Image,
} from "@chakra-ui/react";
import { IGame } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getImageCroppedUrl from "../services/img-url";

interface IGameCard {
  game: IGame;
}

const GameCard = ({ game }: IGameCard) => {
  return (
    <Card overflow={"hidden"}>
      <Image
        src={getImageCroppedUrl(game.background_image)}
        height={200}
        objectFit={"cover"}
      />
      <CardBody padding={0}>
        <CardHeader>
          <HStack justifyContent="space-between" marginBottom={2}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading as={"h4"} size={"md"}>
            {game.name}
          </Heading>
        </CardHeader>
      </CardBody>
    </Card>
  );
};

export default GameCard;
