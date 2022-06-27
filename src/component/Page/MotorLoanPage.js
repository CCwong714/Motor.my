import React from 'react'
import GetYourMotorLoan from '../MotorLoanAllPage/GetYourMotorLoan'
import MotorLoanPageAll from '../MotorLoanAllPage/MotorLoanTop'
import GetMotorLoan from "../MotorLoanAllPage/GetMotorLoan"
import DocumentRequired from "../MotorLoanAllPage/DocumentRequired"
import FinancingPartners from '../MotorLoanAllPage/FinancingPartners'
import LoanFAQ from '../MotorLoanAllPage/LoanFAQ'
import LoanLearnMore from '../MotorLoanAllPage/LoanLearnMore'

function MotorLoanPage() {
  return (
    <>
      <MotorLoanPageAll/>
      <GetYourMotorLoan/>
      <GetMotorLoan/>
      <DocumentRequired/>
      <FinancingPartners/>
      <LoanFAQ/>
      <LoanLearnMore/>
    </>
  )
}

export default MotorLoanPage
