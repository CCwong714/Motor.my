import { Flex, Box } from "@chakra-ui/react";
import { React, onChange, onClickItem, onClickThumb } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CustomerHistoryItem from "./CustomerHistoryItem";

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
      </Box>
    </>
  );
}

export default CustomerHistory;
