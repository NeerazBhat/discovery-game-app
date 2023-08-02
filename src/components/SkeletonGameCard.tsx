import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const SkeletonGameCard = () => {
  return (
    <Card width="100%">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default SkeletonGameCard;
