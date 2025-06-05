import { createFileRoute } from '@tanstack/react-router'

import Container from '../components/Container'

const sectionProps = {
  images: ['./src/assets/desastres.svg', './src/assets/caridad.svg', './src/assets/comunidad.svg', './src/assets/animales.svg', './src/assets/medico.svg'],
  images2: ['./src/assets/artistico.svg', './src/assets/deporte.svg', './src/assets/ambiental.svg','./src/assets/educacion.svg'],
  links: ['/Login', '/Login', '/Login', '/Login', '/'],
  links2: ['/Register', '/Register', '/', '/']
}

export const Route = createFileRoute('/HomePage')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Container section={sectionProps}    ></Container>
  )
}
