import React from "react";
import Image3 from "../../image/photo3.jpg";
import { Flex, Box, Image, Text } from "@chakra-ui/react";
import Corne from "../../image/corne.png";

function TwoPhoto() {
  return (
    <>
      <Flex bgColor="#FDD651" flexDirection={["column-reverse","column-reverse","column-reverse","row"]}>
        <Box
          backgroundImage={[`url(${Image3})`]}
          backgroundPosition="center"
          backgroundSize="cover"
          height={["80vh", "80vh", "80vh", "80vh"]}
          width={["100%","100%","100%","50%"]}
        >
          <Image src={Corne}  />
          {/* transform='rotate(90deg)' transformOrigin="top right " */}
        </Box>

        <Flex marginTop={["0","0","150"]} marginLeft={["0","0","24"]} gap={8} margin={["8","8","none"]}>
          <Flex flexDirection="column" gap={6}>
            <Box>
              <Text fontSize={["xl","5xl"]}>100,000</Text>
              <Text fontSize={["md","xl"]}>tranactions on an annualized basis</Text>
            </Box>{" "}
            <Box>
              <Text fontSize={["xl","5xl"]}>4.4 Milion</Text>
              <Text fontSize={["md","xl"]}>total live bids</Text>
            </Box>
          </Flex>

          <Flex flexDirection="column" gap={6}>
            <Box>
              <Text fontSize={["xl","5xl"]}>50+</Text>
              <Text fontSize={["md","xl"]}>Motor centers across 50+ cities</Text>
            </Box>
            <Box>
              <Text fontSize={["xl","5xl"]}>8000+</Text>
              <Text fontSize={["md","xl"]}>trusted used car dealers</Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default TwoPhoto;
