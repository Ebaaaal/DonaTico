import * as React from 'react'
import { Outlet, createRootRoute, useLocation } from '@tanstack/react-router'

//import  Navigation from '../components/Navigation'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const Location = useLocation()
  const currentPath = Location.pathname
  const hideFooter = ['/', '', '/Register'].includes(currentPath)

  return (
    <React.Fragment>
      <Outlet />
      {!hideFooter && (
        <footer className="bg-black border-t border-black dark:bg-black dark:border-black fixed bottom-0 w-full h-15 z-50">
          <div className='flex justify-around items-center h-full'>
            <a href="/HomePage">
              <img src="/src/assets/home.png" alt="home" className='w-10 h-10' />
            </a>

            <a href="/Donation">
              <img src="/src/assets/donate.png" alt="Donation" className='w-10 h-10' />
            </a>

            <a href="">
              <img src="/src/assets/notificacion.png" alt="Notification" className='w-10 h-10' />
            </a>

            <a href="">
              <img src="/src/assets/perfil.png" alt="Perfil" className='w-10 h-10' />
            </a>

          </div>

        </footer>

      )}


    </React.Fragment>
  )
}
