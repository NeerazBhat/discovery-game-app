import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface IGenre {
  id: number;
  name: string;
}

export interface IFetchGenresResponse {
  count: number;
  results: IGenre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<IGenre[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<IFetchGenresResponse>("/genres", { signal: controller.signal })
      .then((res) => setGenres(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, []);

  return { genres, error };
};

export default useGenres;
