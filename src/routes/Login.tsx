import { createFileRoute } from '@tanstack/react-router'

import Login from '../components/pages/Login'
import Button from '../components/Button'

export const Route = createFileRoute('/Login')({
  component: RouteComponent,
})

const button = (
  
    <Button text='Log In'
    style='text-white text-center bg-green-900 duration-400 hover:cursor-pointer hover:scale-110 hover:bg-green-950 rounded-xl py-2 min-md:py-4'
    link='/HomePage' />
 
)
function RouteComponent() {
  return (
    <Login
      title='Log in'
      email='Email'
      password='Password'
      text='Don`t have an account?'
      link='Sing up'


      button={button}

    ></Login>
  )
}
