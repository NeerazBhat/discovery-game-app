import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { IPlatform } from "../hooks/useGames";
import GameCard from "./GameCard";
import SkeletonGameCard from "./SkeletonGameCard";
import { IGenre } from "../hooks/useGenres";

interface IGameGrid {
  selectedGenre: IGenre | null;
  selectedPlatform: IPlatform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: IGameGrid) => {
  const { error, data, isLoading } = useGames(selectedGenre, selectedPlatform);
  const skeletonCardItems = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
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
