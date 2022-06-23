import { Box, Image, Text, Button,Grid } from "@chakra-ui/react";
import Image3 from "../../image/photo3.jpg";

function FlexTabListOne() {
  return (
    <>
      <Box >
        <Grid templateColumns={['repeat(2,1fr)','repeat(2,1fr)','repeat(2,1fr)','repeat(4,1fr)']} gap={6}>
          <Box padding={5} position="relative" bgColor="white">
            <Text
              position="absolute"
              right="0"
              top="0"
              fontWeight="bold"
              bgColor="gray.300"
              w="5"
              h="5"
              align="center"
              borderBottomLeftRadius={8}
              boxShadow="2xl"
              color="gray.500"
            >
              1
            </Text>

            <Image
              src={Image3}
              w="150px"
              h="150px"
              padding={5}
              borderRadius="100"
              justifyContent="left"
            />
            <Text> Find Your Motor</Text>
            <Text fontSize="12" marginY="2">
              Browse our carefully curated and professionaly Inspected cars
              online
            </Text>
            <Button w="100%" bgColor="white" fontSize="12px" paddingBottom="-5">
              View your motor
            </Button>
          </Box>

          <Box padding={5} position="relative" bgColor="white" >
            <Text
              position="absolute"
              right="0"
              top="0"
              fontWeight="bold"
              bgColor="gray.300"
              w="5"
              h="5"
              align="center"
              borderBottomLeftRadius={8}
              boxShadow="2xl"
              color="gray.500"
            >
              2
            </Text>

            <Image
              src={Image3}
              w="150px"
              h="150px"
              padding={5}
              borderRadius="100"
              justifyContent="left"
            />
            <Text> Test Drive</Text>
            <Text fontSize="12" marginY="2">
              All our cars are sanitized before and after the test drive, making your experience safe and sound.
            </Text>
            
          </Box>

          <Box padding={5} position="relative" bgColor="white">
            <Text
              position="absolute"
              right="0"
              top="0"
              fontWeight="bold"
              bgColor="gray.300"
              w="5"
              h="5"
              align="center"
              borderBottomLeftRadius={8}
              boxShadow="2xl"
              color="gray.500"
            >
              3
            </Text>

            <Image
              src={Image3}
              w="150px"
              h="150px"
              padding={5}
              borderRadius="100"
              justifyContent="left"
            />
            <Text> Doorstep Delivery</Text>
            <Text fontSize="12" marginY="2">
              Choose to collect your car from our centers or enjoy a doorstep delivery.
            </Text>
          </Box>

          <Box padding={5} position="relative" bgColor="white">
            <Text
              position="absolute"
              right="0"
              top="0"
              fontWeight="bold"
              bgColor="gray.300"
              w="5"
              h="5"
              align="center"
              borderBottomLeftRadius={8}
              boxShadow="2xl"
              color="gray.500"
            >
              4
            </Text>

            <Image
              src={Image3}
              w="150px"
              h="150px"
              padding={5}
              borderRadius="100"
              justifyContent="left"
            />
            <Text> Worry-free Purchase</Text>
            <Text fontSize="12" marginY="2">
              Enjoy a 5-day money back guarantee when you buy Carsome Certified car.
            </Text>
          </Box>
        </Grid>
      </Box>
    </>
  );
}

export default FlexTabListOne;
