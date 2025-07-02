import Header from './Header'
import Section from './Section'
import Targets from './Targets'

const cards = [
  {
    title: 'DonáTico',
    img: 'guaria.svg',
    alt: 'guaria',
    text: '¡Ayuda a tu patria!',
  },
  {
    title: 'DonáTico',
    img: 'mapacr.svg',
    alt: 'mapa de Costa Rica',
    text: 'Unete a la causa!',
  },
]

interface SectionProps {
  images: string[]
  images2: string[]
  links: string[]
  links2: string[]
}

interface TargetsProps {
  images: string[]
  alts: string[]
  titles: string[]
  organizers: string[]
  texts: string[]
  locations: string[]
  progress: number[]
}

interface ContainerProps {
  section: SectionProps
  targets: TargetsProps
}

export default function Container(props: ContainerProps) {
  return (
    <div className="flex flex-col justify-center items-center w-full px-4">
      <Header cards={cards} />

      <h2 className="font-fredoka text-3xl font-semibold mt-16 mb-6 cursor-default">
        Donation Options
      </h2>
      <Section {...props.section} />

      <h2 className="font-fredoka text-3xl font-semibold mt-16 mb-6 cursor-default">
        Latest Campaings
      </h2>
      <Targets {...props.targets} />
    </div>
  )
}
