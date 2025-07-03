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
  card1: {
    title: 'DonáTico',
    img: 'guaria.svg',
    alt: 'guaria',
    text: '¡Ayuda a tu patria!',
  },
  card2: {
    title: 'DonáTico',
    img: 'mapacr.svg',
    alt: 'mapa de Costa Rica',
    text: 'Únete a la causa!',
  },
  card3: {
    title: 'DonáTico',
    img: 'carreta.png',
    alt: 'carreta',
    text: '¡Costa Rica nos necesita!',
  },
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

  const { data, isLoading, error } = useQuery({
    queryKey: ['campaigns'],
    queryFn: async () => {
      const response = await fetch('http://donatico.test/api/v1/donations/allDonations')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    },
  });

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
   <Container
  header={{
    card1: headerProps.card1,
    card2: headerProps.card2,
    card3: headerProps.card3
  }}
  section={sectionProps}
  targets={targetsProps}
  values={data}
/>
  )
}