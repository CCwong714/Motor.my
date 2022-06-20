import { Box, Heading ,Grid ,Link} from "@chakra-ui/react";
function PopularUsedCarsForSale() {
  return (
    <>
      <Box paddingTop="20" w="1500" marginX={["0","0","100","300"]} paddingBottom="16">
        <Box> 
          <Heading align="center">Popular Used Cars For Sale</Heading>

          <Grid templateColumns="repeat(3,1fr)" marginTop="5" >
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

export default PopularUsedCarsForSale;
