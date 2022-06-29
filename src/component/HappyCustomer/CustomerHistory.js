import { Flex, Box, Icon } from "@chakra-ui/react";
import { React /*onChange, onClickItem, onClickThumb*/ } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import Carousel from "carousel-react-rcdev";
import CustomerHistoryItem from "./CustomerHistoryItem";
import { TiChevronRightOutline, TiChevronLeftOutline } from "react-icons/ti";

function CustomerHistory() {
  return (
    <>
      {/* <Box w={["360px", "100%"]} display={["none"]}>
          <Carousel
            showArrows={true}
            onChange={onChange}
            onClickItem={onClickItem}
            onClickThumb={onClickThumb}
            alignSelf="center"
            stopOnHover={false}
            interval={10000}
            showIndicators={false}
          >
            <Flex justifyContent="center">
              <CustomerHistoryItem />
              <CustomerHistoryItem />
              <CustomerHistoryItem />
            </Flex>

            <Flex justifyContent="center">
              <CustomerHistoryItem />
              <CustomerHistoryItem />
              <CustomerHistoryItem />
            </Flex>

            <Flex justifyContent="center">
              <CustomerHistoryItem />
              <CustomerHistoryItem />
              <CustomerHistoryItem />
            </Flex>
          </Carousel>
        </Box>   */}

      <Box w={["100%"]}>
        <Flex align="center" gap={["2","2","4"]}>
          <Icon as={TiChevronLeftOutline} w="8" h="8" color="white" />
          <Flex gap={6} overflowX="scroll">
            <CustomerHistoryItem />
            <CustomerHistoryItem />
            <CustomerHistoryItem />
            <CustomerHistoryItem />
            <CustomerHistoryItem />
            <CustomerHistoryItem />
            <CustomerHistoryItem />
            <CustomerHistoryItem />
            <CustomerHistoryItem />
          </Flex>
          <Icon as={TiChevronRightOutline} w="8" h="8" color="white" />
        </Flex>
      </Box>

      
    </>
  );
}

export default CustomerHistory;
