import { Image, ImageProps } from "@chakra-ui/react";
import imgFire from "../assets/fire.png";
import imgLoved from "../assets/loved.png";
import imgNeutral from "../assets/neutral.png";

interface IEmojiRating {
  rating: number;
}

const EmojiRating = ({ rating }: IEmojiRating) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { alt: "Best", src: imgFire },
    4: { alt: "Good", src: imgLoved },
    5: { alt: "low", src: imgNeutral },
  };
  if (rating < 3) return null;
  return <Image {...emojiMap[rating]} boxSize={'25px'} marginTop={2}/>;
};

export default EmojiRating;
