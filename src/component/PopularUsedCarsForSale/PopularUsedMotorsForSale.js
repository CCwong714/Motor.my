import { Box, Heading ,Grid ,Link} from "@chakra-ui/react";
function PopularUsedMotorsForSale() {
  return (
    <>
      <Box paddingTop="20" w="1500"  paddingBottom="16" marginX={["0", "0", "100", "100", "200"]}>
        <Box> 
          <Heading align="center">Popular Used Motor For Sale</Heading>

          <Grid templateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)"]} marginTop="5" >
            <Link color='blue.400' margin={2} align="center">Used Perodua Ativa For Sale</Link>
            <Link color='blue.400' margin={2} align="center">Used Perodua Ativa For Sale</Link>
            <Link color='blue.400' margin={2} align="center">Used Perodua Ativa For Sale</Link>
            <Link color='blue.400' margin={2} align="center">Used Perodua Ativa For Sale</Link>
            <Link color='blue.400' margin={2} align="center">Used Perodua Ativa For Sale</Link>
            <Link color='blue.400' margin={2} align="center">Used Perodua Ativa For Sale</Link>
            <Link color='blue.400' margin={2} align="center">Used Perodua Ativa For Sale</Link>
            <Link color='blue.400' margin={2} align="center">Used Perodua Ativa For Sale</Link>
            <Link color='blue.400' margin={2} align="center">Used Perodua Ativa For Sale</Link>
            <Link color='blue.400' margin={2} align="center">Used Perodua Ativa For Sale</Link>
            <Link color='blue.400' margin={2} align="center">Used Perodua Ativa For Sale</Link>
            <Link color='blue.400' margin={2} align="center">Used Perodua Ativa For Sale</Link>
            <Link color='blue.400' margin={2} align="center">Used Perodua Ativa For Sale</Link>
            <Link color='blue.400' margin={2} align="center">Used Perodua Ativa For Sale</Link>
            <Link color='blue.400' margin={2} align="center">Used Perodua Ativa For Sale</Link>
            <Link color='blue.400' margin={2} align="center">Used Perodua Ativa For Sale</Link>
            <Link color='blue.400' margin={2} align="center">Used Perodua Ativa For Sale</Link>
            <Link color='blue.400' margin={2} align="center">Used Perodua Ativa For Sale</Link>

          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default PopularUsedMotorsForSale;
