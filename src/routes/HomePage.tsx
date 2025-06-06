import { createFileRoute } from '@tanstack/react-router'

import Container from '../components/Container'
import Button from '../components/Button'

const btnHeader = (
  <Button text='>'
    style='text-white text-2xl font-bold text-center bg-green-800 duration-400 cursor-pointer hover:scale-110 hover:bg-green-950 rounded-full py-4 px-6 max-[30rem]:py-1 max-[30rem]:px-3 max-[30rem]:text-md max-[30rem]:font-extralight'
    link='/Login' />

)
const headerProps = {
  title: 'DonáTico',
  img: './src/assets/perezoso.svg',
  alt: 'perezoso',
  text: 'Ayuda a tu patria!',
  button: btnHeader
}

const sectionProps = {
  images: ['./src/assets/desastres.svg', './src/assets/caridad.svg', './src/assets/comunidad.svg', './src/assets/animales.svg', './src/assets/medico.svg'],
  images2: ['./src/assets/artistico.svg', './src/assets/deporte.svg', './src/assets/ambiental.svg', './src/assets/educacion.svg'],
  links: ['/Login', '/Login', '/Login', '/Login', '/'],
  links2: ['/Register', '/Register', '/', '/']
}

const targetsProps = {
  titles: ['Desastres Naturales', 'Caridad'],
  organizers: ['Ebal Seemann', 'Zoe Kraft'],
  texts: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor !', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor !'],
  images: ['desastres.svg', 'caridad.svg'],
  alts: ['desastres', 'caridad']
  
}

export const Route = createFileRoute('/HomePage')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Container header={headerProps} section={sectionProps}  targets={targetsProps}  ></Container>
  )
}
