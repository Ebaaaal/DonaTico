import { createFileRoute } from '@tanstack/react-router'

import CreateDonation from '../components/pages/CreateDonation'
import Button from '../components/Button'

export const Route = createFileRoute('/CreateDonation')({
  component: RouteComponent,
})

const buttonCreate = (
  
    <Button text='Create >'
    style='text-white text-center bg-green-900 duration-400 hover:cursor-pointer hover:scale-110 hover:bg-green-950 rounded-xl py-2  min-md:py-4'
    link='/' />
 
)
const buttonBack = (
  
    <Button text='<'
    style='text-black text-2xl font-regular hover:cursor-pointer hover:scale-110 duration-400  ' 
    link='/' />
 
)
function RouteComponent() {
  return (
    <CreateDonation
      btnBack={buttonBack}
      title='Create Donation'
      img='img.png'
      alt='img'
      donationTitle='Donation Title'
      description='Description'
      location='Location'
      category='Category'
      type='Type'
      buttonCreate={buttonCreate}

    ></CreateDonation>
  )
}
