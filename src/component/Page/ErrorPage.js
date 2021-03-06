import React from "react";
import BG404 from "../../image/404BG.svg";
import { Button, Text, Image, Box, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  let navigate = useNavigate();
  return (
    <Box
      align="center"
      marginY={["5", "24"]}
      padding="5"
      marginX={["5", "5", "100", "100", "250"]}
    >
      <Image src={BG404} />
      <Text fontSize={["xl", "4xl"]} fontWeight="bold">
        We Can't find the page you're looking for.
      </Text>
      <Text fontSize={["md", "lg"]} marginTop={4}>
        The page your're looking for might have moved or on longer exist. Can we
        guide you to our homepage?
      </Text>
      <Flex gap={6} justifyContent="center" marginTop={10}>
        <Button
          marginTop={4}
          w="150px"
          bgColor="blue.900"
          color="yellow.400"
          onClick={() => window.location.reload()}
        >
          Reload
        </Button>
        <Button
          marginTop={4}
          w="150px"
          bgColor="yellow.400"
          color="blue.900"
          onClick={() => navigate("/")}
        >
          Back to Home
        </Button>
      </Flex>
    </Box>
  );
}

export default ErrorPage;
