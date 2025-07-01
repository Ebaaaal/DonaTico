import { createFileRoute } from '@tanstack/react-router'

import Payment from '../components/pages/Payment'
import Button from '../components/Button'

export const Route = createFileRoute('/Payment')({
  component: RouteComponent,
})

const buttonPay = (
  
    <Button text='Pay >'
    style='text-white text-center bg-green-900 duration-400 hover:cursor-pointer hover:scale-110 hover:bg-green-950 rounded-xl py-2  min-md:py-4'
    link='/' />
 
)
const buttonBack = (
    <Button text='<'
    style='text-black text-2xl font-regular hover:cursor-pointer hover:scale-110 duration-400  ' 
    onClick={() => window.history.go(-1)} />
 
)
function RouteComponent() {
  return (
    <Payment
      btnBack={buttonBack}

      title="Payment Details"
      donation="amount to donate"
      amount={[1000, 2000, 5000, 10000, 20000, 50000, 100000, 250000]}
      textTitleInfo="Aporte de las donaciones para los creadores de Donaticos"
      textInfo="En Donaticos, las donaciones son completamente voluntarias y se destinan únicamente a las campañas elegidas por los usuarios. Ningún miembro del equipo obtiene beneficio económico, ya que nuestro propósito es facilitar la ayuda directa sin fines de lucro, respetando siempre la voluntad del donante."

      Method="Payment Method"
      methodVisa="Visa card"
      methodMastercard="Mastercard"
      methodOther="Other"
      cardNumber="Card Number"
      cardHolder="Card Holder Name"  
      expiration="Expiration date"
      security="Security code"
      saveCard="Save this card"
      buttonPay={buttonPay}

    ></Payment>
  )
}
