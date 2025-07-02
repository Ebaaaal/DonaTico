import { useState } from 'react'

interface CardData {
  title: string
  img: string
  alt: string
  text: string
}

interface HeaderProps {
  cards: CardData[]
}

export default function Header({ cards }: HeaderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length)
  }

  return (
    <div className="relative w-full max-w-md mx-auto mt-10">
    
      <h1 className="font-fredoka text-green-900 text-4xl font-bold cursor-default mb-6 px-5">
        DonáTico
      </h1>

      {/* Carrusel */}
      <div className="overflow-hidden w-full rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            width: `${cards.length * 90}%`,
            transform: `translateX(-${currentIndex * (100 / cards.length)}%)`,
          }}
        >
          {cards.map((card, i) => {
            // Estilos específicos por tarjeta
            const background = i === 0 ? 'bg-lime-200' : 'bg-green-700'
            const text = i === 0 ? 'text-green-700' : 'text-lime-200'
            const imageSize = i === 0 ? 'w-25' : 'w-71 p-2'
            const btnColor = i === 0 ? 'bg-green-700' : 'bg-lime-300'

            return (
              <div
                key={i}
                className="pl-2 pr-1"
                style={{ width: `${100 / cards.length}%` }}
              >
                <div
                  className={`flex items-center justify-between rounded-2xl px-6 py-3 relative ${background}`}
                >
                  <h3 className={`font-fredoka text-lg ${text}`}>
                    {card.text}
                  </h3>
                  <img
                    className={`${imageSize} object-contain `}
                    src={card.img}
                    alt={card.alt}
                  />

                  {i === currentIndex && (
                    <button
                      onClick={handleNext}
                      className={`absolute bottom-4 text-white right-4 text-2xl font-bold py-2 px-4 rounded-full ${btnColor}`}
                      aria-label="Siguiente tarjeta"
                      type="button"
                    >
                      &gt;
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
