import { Box,Flex ,Input , Text, Image ,Button ,Grid,Divider ,Stack } from "@chakra-ui/react";
import Image3 from '../../image/photo3.jpg'
import SellAndBuyMotorRight from "../SellandBuyMotor/SellAndBuyMotorRight";

function SellAndBuyMotor() {
  return ( 
    <>
      <Flex w="500px">
          <Box>
            <Input type="text"/>
            <Box>
              <Box>top search</Box>
                <Grid templateColumns='repeat(4, minmax(120px, 1fr))' gap={4}>
                  <Box >
                    <Image src={Image3}  />
                  </Box>  
                  <Box>
                    <Image src={Image3} />
                  </Box> 
                  <Box>
                    <Image src={Image3} />
                  </Box> 
                  <Box>
                    <Image src={Image3}/>
                  </Box> 
                </Grid>
            </Box>

            <Box>
              <Grid templateColumns='repeat(8, minmax(80px, 1fr))' gap={4}>
                <Box>
                <Image src={Image3}/>
                <Text>Perodua</Text>
                </Box>
                <Box>
                <Image src={Image3}/>
                <Text>Perodua</Text>
                </Box>
                <Box>
                <Image src={Image3}/>
                <Text>Perodua</Text>
                </Box>
                <Box>
                <Image src={Image3}/>
                <Text>Perodua</Text>
                </Box>
                <Box>
                <Image src={Image3}/>
                <Text>Perodua</Text>
                </Box>
                <Box>
                <Image src={Image3}/>
                <Text>Perodua</Text>
                </Box>
                <Box>
                <Image src={Image3}/>
                <Text>Perodua</Text>
                </Box>
                <Box>
                <Image src={Image3} />
                <Text>Perodua</Text>
                </Box>
              </Grid>

              <Grid templateColumns='repeat(8, minmax(80px, 1fr))' gap={4}>
                <Box>
                <Image src={Image3}/>
                <Text>Perodua</Text>
                </Box>
                <Box>
                <Image src={Image3}/>
                <Text>Perodua</Text>
                </Box>
                <Box>
                <Image src={Image3}/>
                <Text>Perodua</Text>
                </Box>
                <Box>
                <Image src={Image3}/>
                <Text>Perodua</Text>
                </Box>
                <Box>
                <Image src={Image3}/>
                <Text>Perodua</Text>
                </Box>
                <Box>
                <Image src={Image3}/>
                <Text>Perodua</Text>
                </Box>
                <Box>
                <Image src={Image3}/>
                <Text>Perodua</Text>
                </Box>
                <Box>
                <Image src={Image3} />
                <Text>Perodua</Text>
                </Box>
              </Grid>

              <Grid templateColumns='repeat(auto-fit, minmax(100px, 1fr))' gap={5}>
                <Box textAlign="center" >
                  <Button fontSize="11px" >Under RM30,000</Button>
                </Box>
                <Box textAlign="center">
                  <Button fontSize="11px">Under RM30,000-50,000</Button>
                </Box>
                <Box textAlign="center">
                  <Button fontSize="11px">Under RM50,000-80,000</Button>
                </Box>
                <Box textAlign="center">
                  <Button fontSize="11px">Under RM80,000-100,000</Button>
                </Box>
                <Box textAlign="center">
                  <Button fontSize="11px">View All Motor</Button>
                </Box>
              </Grid>
            </Box>
          </Box>

          <Stack   px={4} py={2}>
          <Divider orientation="vertical" bgColor="red.800" w='1px' h='350px'/>
          </Stack>

          <Box>
            <SellAndBuyMotorRight/>
          </Box>

      </Flex>
      
    </>
   );
}

export default SellAndBuyMotor;
