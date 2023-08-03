import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getImageCroppedUrl from "../services/img-url";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <List padding={4}>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={2}>
          <HStack>
            <Image
              src={getImageCroppedUrl(genre.image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            <Text color='white' fontSize='xl'>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
