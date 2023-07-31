import { Card, CardBody, CardHeader, Heading, Image } from "@chakra-ui/react";
import { IGame } from "../hooks/useGames";

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
        <CardHeader><Heading as={'h4'} size={'md'}>{game.name}</Heading></CardHeader>
      </CardBody>
    </Card>
  );
};

export default GameCard;
