import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  Grid,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { useState } from "react";
import Image3 from "../../image/photo3.jpg";

import { AiFillStar } from "react-icons/ai";

const ReadMore = ({ name, text, showIcon, color, isFacebook }) => {
  const [line, setLine] = useState(4);
  const [display, setDisplay] = useState("block");

  const clickHandler = () => {
    setLine(0);
    setDisplay("none");
  };

  return (
    <Box bgColor="white">
      <Flex flexDir="column">
        <Image marginX="auto" src={Image3} w="100%" h="200px" />
        
        <Flex position='relative' flexDirection="column" justifyContent="space-between" h='100%'>
          <Flex
            flexDirection="column"
            marginY="auto"
            paddingRight={["0", "0", "5"]}
            marginTop="2"
            marginLeft="4"
          >
            <Text
              align={["center", "center", "left"]}
              fontSize={["lg", "2xl", "lg", "2xl"]}
            >
              {name}
            </Text>
            <Text
              noOfLines={line}
              textOverflow="ellipsis"
              fontSize={["12", "md", "12", "md"]}
              marginY="2"
              align={["center", "center", "left"]}
            >
              {text}
            </Text>
            <Button display={display} onClick={clickHandler}>
              Read more
            </Button>
          </Flex>
          <Flex>
            <Icon
              as={showIcon}
              color={color}
              width="14"
              height="14"
              marginTop={2}
              marginX={2}
              paddingBottom={4}
            />
            {isFacebook ? (
              <Text alignSelf="center" fontSize="lg" fontWeight="bold">
                Review
              </Text>
            ) : (
              <Box alignSelf="center">
                <Icon as={AiFillStar} color="yellow.400" w="6" h="6" />
                <Icon as={AiFillStar} color="yellow.400" w="6" h="6" />
                <Icon as={AiFillStar} color="yellow.400" w="6" h="6" />
                <Icon as={AiFillStar} color="yellow.400" w="6" h="6" />
                <Icon as={AiFillStar} color="yellow.400" w="6" h="6" />
              </Box>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ReadMore;
