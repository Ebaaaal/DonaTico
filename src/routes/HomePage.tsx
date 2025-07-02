import { createFileRoute } from '@tanstack/react-router'
import Container from '../components/Container'

const sectionProps = {
  images: ['desastres.svg', 'caridad.svg', 'comunidad.svg', 'animales.svg', 'medico.svg'],
  images2: ['artistico.svg', 'deporte.svg', 'ambiental.svg', 'educacion.svg'],
  links: ['/Disaster', '/Charity', '/Community', '/Animals', '/Medical'],
  links2: ['/Artistic', '/Sport', '/Environmental', '/Education'],
}

const targetsProps = {
  images: ['imagetarget.svg', 'imagetarget.svg'],
  alts: ['desastres', 'caridad'],
  titles: ['Desastres Naturales', 'Caridad'],
  organizers: ['Ebal Seemann', 'Zoe Kraft'],
  texts: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit!',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor !',
  ],
  locations: ['jacobe', 'puerto'],
  progress: [55, 100],
}

export const Route = createFileRoute('/HomePage')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Container section={sectionProps} targets={targetsProps} />
}
