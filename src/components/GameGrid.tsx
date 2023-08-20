import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import SkeletonGameCard from "./SkeletonGameCard";
import { IGameQuery } from "../App";

interface IGameGrid {
  gameQuery: IGameQuery;
}

const GameGrid = ({ gameQuery }: IGameGrid) => {
  const { error, data, isLoading } = useGames(gameQuery);
  const skeletonCardItems = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error}</Text>;

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5}>
        {isLoading &&
          skeletonCardItems.map((item) => <SkeletonGameCard key={item} />)}
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
