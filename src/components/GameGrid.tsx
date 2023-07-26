import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Spinner, Text } from "@chakra-ui/react";

interface IGame {
  id: number;
  name: string;
}

interface IFetchGameResponse {
  count: number;
  results: IGame[];
}

const GameGrid = () => {
  const [games, setGames] = useState<IGame[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    apiClient
      .get<IFetchGameResponse>("/games")
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

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
