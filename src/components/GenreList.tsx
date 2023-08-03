import {
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getImageCroppedUrl from "../services/img-url";

const GenreList = () => {
  const { data, isLoading } = useGenres();
  const skeletonGenrelists = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <List padding={4}>
      {isLoading &&
        skeletonGenrelists.map((list) => (
          <Skeleton height="40px" marginY={2} key={list} />
        ))}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={2}>
          <HStack>
            <Image
              src={getImageCroppedUrl(genre.image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            <Text color="white" fontSize="xl">
              {genre.name}
            </Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
