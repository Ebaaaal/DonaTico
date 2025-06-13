import * as React from 'react'
import { Outlet, createRootRoute, useLocation } from '@tanstack/react-router'
import Navigation from '../components/Navigation'


//import  Navigation from '../components/Navigation'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const Location = useLocation()
  const currentPath = Location.pathname
  const hideFooter = ['/', '/Login', '/Register'].includes(currentPath)

  return (
    <React.Fragment>
      <Outlet />
      
        {!hideFooter && (
          <div className='pt-15'>
          <Navigation />
          </div>)}
      



    </React.Fragment>
  )
}
