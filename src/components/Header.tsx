
import { useState } from 'react'
import type typeReact from 'react'

interface HeaderProps {
  card1: {
    title: string
    img: string
    alt: string
    text: string
  }
  card2: {
    title: string
    img: string
    alt: string
    text: string
  }
   card3: {
    title: string
    img: string
    alt: string
    text: string
  }

}

export default function Header({ card1, card2, card3 }: HeaderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const cards = [card1, card2, card3]

  const stylesByCard = [
    {
      background: 'bg-lime-200',
      textColor: 'text-green-700',
      imageSize: 'w-25',
      btnColor: 'bg-green-700',
    },
    {
      background: 'bg-green-700',
      textColor: 'text-lime-200',
      imageSize: 'w-62 p-2',
      btnColor: 'bg-lime-300',
    },
    {
      background: 'bg-green-300',
      textColor: 'text-green-900',
      imageSize: 'w-42 p-2',
      btnColor: 'bg-green-600',
    },
  ]

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length)
  }

  return (
    <div className="relative w-full max-w-md mx-auto mt-10">
      <h1 className="font-fredoka text-green-900 text-4xl font-bold cursor-default mb-6 px-5">
        DonáTico
      </h1>

      <div className="overflow-hidden w-full rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            width: `${cards.length * 90}%`,
            transform: `translateX(-${(currentIndex * 100) / cards.length}%)`,
          }}
        >
          {cards.map((card, i) => {
            const { background, textColor, imageSize, btnColor } = stylesByCard[i]

            return (
              <div
                key={i}
                className="pl-6"
                style={{ width: `${100 / cards.length}%` }}
              >
                <div
                  className={`flex items-center justify-between rounded-2xl px-6 py-3 relative ${background}`}
                >
                  <h3 className={`font-fredoka text-lg ${textColor}`}>
                    {card.text}
                  </h3>
                  <img
                    className={`${imageSize} object-contain`}
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
