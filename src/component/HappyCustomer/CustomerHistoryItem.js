import { Box, Text, Flex } from "@chakra-ui/react";
function CustomerHistoryItem() {
  return (
    <>
      <Box w="400px" h="200px" bgColor="white" padding="5" borderRadius={4} marginX="6">
        <Flex flexDirection="column" justifyContent="space-between">
          <Text fontSize={["sm","md","xl"]}>Atie Baharun </Text>
          <Text fontSize={["xs","sm","md"]} color="gray">
              Berbaloi...jual dan beli kereta di Carsome..service yang yang sangat
              bagus di samping staff yang awesome..jual kereta lama dengan harga
              yang tinggi..perbezaan harga yang ketara dengan syarikat...
          </Text>
        </Flex>
      </Box>
    </>
  );
}

export default CustomerHistoryItem;
