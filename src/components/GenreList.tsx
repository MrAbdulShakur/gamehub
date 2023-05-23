import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props{
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

	if(isLoading) return <Spinner />

	if(error) return null;

  return ( 
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              borderRadius={8}
              boxSize="32px"
            />
            <Button onClick={() => onSelectGenre(genre)} fontSize='large' variant='link'>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
