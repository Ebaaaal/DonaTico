import { createFileRoute } from '@tanstack/react-router'

import Container from '../components/Container'
import Button from '../components/Button'

import { useQuery } from '@tanstack/react-query'


const btnHeader = (
  <Button text='>'
    style='text-white text-2xl font-bold text-center bg-green-800 duration-400 cursor-pointer hover:scale-110 hover:bg-green-950 rounded-full py-4 px-6 max-[30rem]:py-1 max-[30rem]:px-3 max-[30rem]:text-md max-[30rem]:font-extralight'
    link='/Login' />

)
const headerProps = {
  title: 'DonáTico',
  img: 'perezoso.svg',
  alt: 'perezoso',
  text: 'Ayuda a tu patria!',
  button: btnHeader
}

const sectionProps = {
  images: ['desastres.svg', 'caridad.svg', 'comunidad.svg', 'animales.svg', 'medico.svg'],
  images2: ['artistico.svg', 'deporte.svg', 'ambiental.svg', 'educacion.svg'],
  links: ['/Disaster', '/Charity', '/Community', '/Animals', '/Medical'],
  links2: ['/Artistic', '/Sport', '/Environmental', '/Education']
}

const targetsProps = {
  images: ['desastres.svg', 'caridad.svg'],
  alts: ['desastres', 'caridad'],
  titles: ['Desastres Naturales', 'Caridad'],
  organizers: ['Ebal Seemann', 'Zoe Kraft'],
  texts: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit!', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor !'],
  locations: ['jacobe', 'puerto'],
  progress: [55, 100],
  
}

export const Route = createFileRoute('/HomePage')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Container header={headerProps} section={sectionProps}  targets={targetsProps}  ></Container>
  )
}
