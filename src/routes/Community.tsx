import { createFileRoute } from '@tanstack/react-router'

import Disaster from '../components/pages/Disaster'
import Button from '../components/Button'


export const Route = createFileRoute('/Community')({
  component: RouteComponent,
})

const campaignData = [
  {
    image: 'campaign-image.svg',
    organizer: 'Organizer 1',
    heading: 'Streets ',
    details: 'Ayuda a mejorar la calle',
    progress: 35, 
   link: <a href="/Details" className="text-green-800 underline">Know More</a>,
  },
  {
    image: 'campaign-image.svg',
    organizer: 'Organizer 2',
    heading: 'park manitenance',
    details: 'Aenean commodo ligula eget dolor...',
    progress: 45, 
    link: <a href="/Details" className="text-green-800 underline">Know More</a>,
  },
];

const buttonBack = (
    <Button text='<'
    style='text-black text-2xl font-regular hover:cursor-pointer hover:scale-110 duration-400  ' 
    link='/HomePage' />
)

const buttonInfo = (
  <Button text='i'
    style='text-black font-semibold text-2xl font-regular hover:cursor-pointer hover:scale-110 duration-400  border-2 border-black rounded-full w-10 h-10 flex justify-center items-center' 
    link='/' />
)

function RouteComponent() {
  return <Disaster
    btnBack={buttonBack}
    title='Community'
    btnInfo={buttonInfo}
    searchPlaceholder='Search for a disaster...'
    campaign={campaignData}
  ></Disaster>
}
