import { Box, Text, Flex } from "@chakra-ui/react";
function CustomerHistoryItem() {
  return (
    <>
      <Box bgColor="white" padding="5" borderRadius={4}>
        <Flex w="300px" flexDirection="column" justifyContent="space-between">
          <Text fontSize={["sm", "md", "xl"]}>Atie Baharun </Text>
          <Text fontSize={["xs", "sm", "md"]} color="gray">
            Berbaloi...jual dan beli kereta di Carsome..service yang yang sangat
            bagus di samping staff yang awesome..jual kereta lama dengan harga
            yang tinggi..perbezaan harga yang ketara dengan
            syarikat...Berbaloi...jual dan beli kereta di Carsome..service yang
            yang sangat bagus di samping staff yang awesome..jual kereta lama
            dengan harga yang tinggi..perbezaan harga yang ketara dengan
            syarikat...
          </Text>
        </Flex>
      </Box>
    </>
  );
}

export default CustomerHistoryItem;
