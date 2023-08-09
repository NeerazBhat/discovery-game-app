import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
} from "@chakra-ui/react";
import useGenres, { IGenre } from "../hooks/useGenres";
import getImageCroppedUrl from "../services/img-url";

interface IGenreList {
  onSelectGenre: (genre: IGenre) => void;
  selectedGenre: IGenre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: IGenreList) => {
  const { data, isLoading } = useGenres();
  const skeletonGenrelists = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <List padding={4}>
      {isLoading &&
        skeletonGenrelists.map((list) => (
          <Skeleton height="40px" marginY={2} key={list} borderRadius={4} />
        ))}
      {data.map((genre) => (
        <ListItem key={genre.id} marginY={3}>
          <HStack>
            <Image
              src={getImageCroppedUrl(genre.image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              variant="link"
              fontSize="xl"
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              bgColor={genre.id === selectedGenre?.id ? "gray.900" : ""}
              padding="4px 6px"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
