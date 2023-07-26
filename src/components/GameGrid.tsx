import { Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { error, games, isLoading } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      {isLoading ? (
        <Spinner />
      ) : (
        <ul>
          {games.map((game) => (
            <li key={game.id}>{game.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default GameGrid;
