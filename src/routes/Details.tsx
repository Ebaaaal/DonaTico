import { createFileRoute } from '@tanstack/react-router'

import Details from '../components/pages/Details'
import Button from '../components/Button'


export const Route = createFileRoute('/Details')({
  component: RouteComponent,
})


const buttonBack = (
  
    <Button text='<'
    style='text-black text-2xl font-regular hover:cursor-pointer hover:scale-110 duration-400  ' 
    link='/Disaster' />
 
)

const buttonLike = (
  <Button text='♡'
    style='text-black font-bold text-2xl font-fredoka hover:cursor-pointer hover:scale-110 duration-400   flex justify-center items-center' 
    link='/' />
)

const buttonDonate = (
  
    <Button text='Donate >'
    style=' item-center justify-center text-white text-center  bg-green-900 duration-400 hover:cursor-pointer hover:scale-110 hover:bg-green-950 rounded-xl py-3 px-33'
    link='/' />
 
)

function RouteComponent() {
  return (
    <Details
       btnBack={buttonBack}
      title='Details'
      btnLike={buttonLike}
      img='img-details.svg'
      alt='Campaign'
      donationTitle='Food for Families'
      location='San Francisco, CA'
      progress= {50}
      description='Aenean commodo ligula eget dolor aenean massa. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.'
      autor='Organizer 1'
      btnDonate={buttonDonate}
    ></Details>
  )
}
