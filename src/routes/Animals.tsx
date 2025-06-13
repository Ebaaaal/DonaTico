import { createFileRoute } from '@tanstack/react-router'

import Disaster from '../components/pages/Disaster'
import Button from '../components/Button'

export const Route = createFileRoute('/Animals')({
  component: RouteComponent,
})

const campaignData = [
  {
    image: 'campaign-image.svg',
    organizer: 'Organizer 1',
    heading: 'house for dogs',
    details: 'Ayuda a perros necesitadas',
    progress: 60,
    link: <a href="/Details" className="text-green-800 underline">Know More</a>,
  },
  {
    image: 'campaign-image.svg',
    organizer: 'Organizer 2',
    heading: 'animal food',
    details: 'Aenean commodo ligula eget dolor...',
    progress: 23,
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
    title='Animals'
    btnInfo={buttonInfo}
    searchPlaceholder='Search for a disaster...'
    campaign={campaignData}
  ></Disaster>
}
