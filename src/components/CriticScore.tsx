import { Badge } from "@chakra-ui/react";

interface ICriticScore {
  score: number;
}

const CriticScore = ({ score }: ICriticScore) => {
  const color = score > 75 ? "green" : score > 65 ? "yellow" : "";
  return (
    <Badge colorScheme={color} paddingX={2}>
      {score}
    </Badge>
  );
};

export default CriticScore;
