import { Box ,Select ,Button,Text,Image ,Icon ,Grid} from '@chakra-ui/react'
import SelectionJS from '../../selectionJS/SelectionJS.json'
import {BsTools} from 'react-icons/bs'
import Payment from '../../image/Payment.svg'

function SellAndBuyMotorRight() {
  return ( 
    <>
      <Box>
        <Text 
        fontWeight="bold" 
        fontSize="2xl" 
        marginBottom="5"
        >
          Sell Your Motor 
        </Text>

        <Select placeholder='Select option' width="350px" marginBottom="5">
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </Select>

        <Select placeholder='Select option' width="350px" marginBottom="5">
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </Select>

        <Button 
        width="350px" 
        bgColor="yellow.400" 
        as="xl"
        >
          Start here
        </Button>

        <Text fontSize="12px">By proceeding,I agree to the
        <Button as='span'variant='link' fontSize="12px" marginX="1" color="blue.500"> Privacy Policy </Button>
        &  <Button as='span'variant='link' fontSize="12px" marginX="1" color="blue.500"> Terms of Use</Button>
        </Text>
      </Box>
      <Grid templateColumns='repeat(3,1fr)' paddingTop="10">
        <Box align="center">
          <Image src={Payment} />
          <Text fontSize="13px">30 minutes Inspection Time</Text>
        </Box>
        <Box align="center">
          <Image src={Payment}/>
          <Text fontSize="13px">Receive Payment in 1-hour*</Text>
        </Box>
        <Box align="center" >
          <Image src={Payment}/>
          <Text fontSize="13px">Hassle-Free and No Paperword</Text>            
        </Box>
      </Grid>
    </>
   );
}

export default SellAndBuyMotorRight;
