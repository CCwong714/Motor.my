import React from 'react'
import SellMotorPageTop from '../SellMotorPageAll/SellMotorPageTop'
import SellingJourney from '../SellMotorPageAll/SellingJourney'
import WhyChooseUs from '../SellMotorPageAll/WhyChooseUs'
import TwoPhoto from "../SellMotorPageAll/TwoPhoto"
import SellMotorContantUsWhatsApp from "../SellMotorPageAll/SellMotorContantUsWhatsApp"
import HowToBook from '../SellMotorPageAll/HowToBook'
import SafetyPriority from '../SellMotorPageAll/SafetyPriority'
import TrustInUs from '../SellMotorPageAll/TrustInUs'
import FAQSell from '../SellMotorPageAll/FAQSell'
import FeaturedOn from '../SellMotorPageAll/FeaturedOn'
import { Box } from '@chakra-ui/react'

function  SellMotorPage() {
  return (
    <Box>
      <SellMotorPageTop/>
      <SellingJourney/>
      <WhyChooseUs/>
      <TwoPhoto/>
      <SellMotorContantUsWhatsApp/>
      <HowToBook/>
      <SafetyPriority/>
      <TrustInUs/>
      <FAQSell/>
      <FeaturedOn/>
      
    </Box>
  )
}

export default SellMotorPage
