import { Box, Image, Flex, Text, Button } from "@chakra-ui/react";
import React from "react";
import ImagewhatApp from "../../image/whatsApp.jpg";
import Image3 from "../../image//photo3.jpg";

function SellMotorContantUsWhatsApp() {
  return (
    <>
      <Box paddingX={5} marginX={["0","0","50","100" ,"200"]}>
        <Box
          backgroundImage={[`url(${ImagewhatApp})`]}
          backgroundPosition="center"
          backgroundSize="cover"
          w="100%"
          height={["70vh", "300px"]}
          borderRadius={15}
        >
          <Box paddingTop={10} paddingX="5">
            <Flex flexDir={["column", "row"]} alignItems={["center", "none"]}>
              <Image
                src={Image3}
                w="100px"
                height="100px"
                borderRadius="100"
                margin={5}
              />
              <Box paddingLeft={5} w="100%">
                <Text
                  fontSize="xl"
                  fontWeight="bold"
                  marginTop={10}
                  align={["center", "left"]}
                >
                  We Are Here to Help
                </Text>
                <Text marginTop={4} color="gray.500" align={["center", "left"]}>
                  Do you have any question? Chat with us on WhatsApp.
                </Text>
                <Button
                  bgColor="#25D366"
                  color="white"
                  marginTop={10}
                  marginLeft="62"
                >
                  <Text fontWeight="bold">Open WhatApp</Text>
                </Button>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default SellMotorContantUsWhatsApp;
