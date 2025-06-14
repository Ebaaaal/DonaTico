import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

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

const buttonDonate = (
  
    <Button text='Donate'
    style=' item-center justify-center text-white text-center  bg-green-900 duration-400 hover:cursor-pointer hover:scale-110 hover:bg-green-950 rounded-xl py-2 px-33'
    link='/Payment' />
 
)

  function RouteComponent() {

  const [liked, setLiked] = useState(false)  

 const handleLikeClick = () => {
  setLiked(!liked)
}

  const buttonLike = (
  <Button
    text="♥"
    style={`text-4xl font-fredoka hover:cursor-pointer hover:scale-110 duration-300 flex justify-center items-center ${
      liked ? 'text-red-500' : 'text-gray-400'
    }`}
    onClick={handleLikeClick}
  />
)

  return (
    <Details
      btnBack={buttonBack}
      title='Details'
      btnLike={buttonLike}
      img='img-details.svg'
      alt='Campaign'
      donationTitle='Food for Families'
      location='San Francisco, CA'
      progress={50}
      description='Aenean commodo ligula eget dolor aenean massa Aenean commodo ligula eget dolor aenean massa Aenean commodo ligula eget dolor aenean massa'
      autor='Organizer 1'
      btnDonate={buttonDonate}
    />
  )
}
