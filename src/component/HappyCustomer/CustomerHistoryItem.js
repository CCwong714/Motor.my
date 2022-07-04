import { Box, Text, Flex } from "@chakra-ui/react";
function CustomerHistoryItem() {
  return (
    <>
      <Box bgColor="white" padding="2" borderRadius={4} margin={4}>
        <Flex flexDirection="column" justifyContent="space-between">
          <Text fontSize={["lg", "xl", "xl"]}>Atie Baharun </Text>
          <Text fontSize={["sm", "sm", "md"]} color="gray" w={["auto","auto","150px","200px","auto"]}>
            Berbaloi...jual dan beli kereta di Motor..service yang yang sangat
            bagus di samping staff yang awesome..jual kereta lama dengan harga
            yang tinggi..perbezaan harga yang ketara dengan
            syarikat...Berbaloi...jual dan beli kereta di Motor..service yang
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
