import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

import Category from '../components/pages/Category'
import Button from '../components/Button'

export const Route = createFileRoute('/Sport')({
  component: SportPage,
})

function SportPage() {
  const [showInfo, setShowInfo] = useState(false)

  const buttonBack = (
    <Button
      text="<"
      style="text-black text-2xl font-regular hover:cursor-pointer hover:scale-110 duration-400"
      link="/HomePage"
    />
  )

  const buttonInfo = (
    <button
      onClick={() => setShowInfo(!showInfo)}
      className="text-black font-semibold text-2xl font-regular hover:cursor-pointer hover:scale-110 duration-400 border-2 border-black rounded-full w-10 h-10 flex justify-center items-center"
    >
      i
    </button>
  )

  const campaigns = [
      {
      image: 'campaign-image.svg',
      organizer: 'Red Cross',
      heading: 'Ayuda para inundaciones',
      details: 'Apoyo a familias afectadas por lluvias fuertes.',
      progress: 45,
     link: <a href="/Details" className="text-green-800 underline">Know More</a>,
    },
    {   image: 'campaign-image.svg',
    organizer: 'Organizer 2',
    heading: 'animal food',
    details: 'Aenean commodo ligula eget dolor...',
    progress: 23,
    link: <a href="/Details" className="text-green-800 underline">Know More</a>,
  },
  ]

  return (
    <div className="relative">
      <Category
        btnBack={buttonBack}
        title="Sport"
        btnInfo={buttonInfo}
        searchPlaceholder="Buscar por..."
        campaign={campaigns}
      />

      {showInfo && (
        <div className="absolute top-0  w-full h-full  flex justify-center items-start pt-40 bg-black/70">
          <div className="bg-white w-11/12 max-w-md p-6 rounded-lg shadow-lg border border-green-400 text-green-800 relative">
            <h2 className="text-lg font-bold mb-2">¿Qué significa esta categoría?</h2>
            <p className="text-sm">
           Los proyectos deportivos buscan fomentar la actividad física, la inclusión y el desarrollo de talentos.
Incluyen:

            </p>
            <ul className="list-disc list-inside text-sm mt-5 flex flex-col gap-3">
              <li>Escuelas y equipos deportivos comunitarios</li>
              <li>Eventos deportivos benéficos</li>
              <li>Apoyo a atletas en formación</li>
              <li>Construcción o mejora de instalaciones deportivas</li>
              <li>Recreación deportiva</li>
              <li>Desarrollo de habilidades deportivas</li>
              <li>Apoyo para giras deportivas</li>
            </ul>
            <button
              onClick={() => setShowInfo(false)}
              className="absolute top-2 right-3 text-black text-lg hover:scale-110"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  )
}


