import React from 'react'
import GetInsuredStep from '../MotorInsuranceAllPage/GetInsuredStep'
import InsuranceFAQ from '../MotorInsuranceAllPage/InsuranceFAQ'
import InsuranceLearnMore from '../MotorInsuranceAllPage/InsuranceLearnMore'
import InsurancePartners from '../MotorInsuranceAllPage/InsurancePartners'
import InsuranceTop from '../MotorInsuranceAllPage/InsuranceTop'



function MotorInsurance() {
  return (
    <>
      <InsuranceTop/>
      <InsurancePartners/>
      <GetInsuredStep/>
      <InsuranceFAQ/>
      <InsuranceLearnMore/>
    </>
  )
}

export default MotorInsurance
