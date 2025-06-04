import { createFileRoute } from '@tanstack/react-router'

import Register from '../components/pages/Register'
import Button from '../components/Button'


const btnRegister = (
  <Button text='Sign Up' 
  style='text-white bg-green-900 duration-400 hover:cursor-pointer hover:scale-110 hover:bg-green-950 rounded-xl py-2 min-md:py-4 text-center'
  link='/Container' />
)
 

export const Route = createFileRoute('/Register')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Register
    title='Register'
    name='Name'
    email='Email'
    phone='Phone'
    address='Address'
    password='Password'
    confirmPassword='Confirm Password'
    text='Already have an account?'
    link='Login up'
    button={btnRegister}
    >
    </Register>
  )
}
