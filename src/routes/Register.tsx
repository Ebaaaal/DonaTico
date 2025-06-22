import { createFileRoute } from '@tanstack/react-router'

import Register from '../components/pages/Register'
import Button from '../components/Button'
import { useState } from 'react'


const btnRegister = (
  <Button text='Sign Up' 
  style='text-white bg-green-900 duration-400 hover:cursor-pointer hover:scale-110 hover:bg-green-950 rounded-xl py-2 min-md:py-4 text-center'
  link='/HomePage' />
)
 
function ButtonPasswordReveal({ showPassword, setShowPassword }: any) {

  const img = showPassword ? 'ojoabierto.svg' : 'ojociego.svg'; 
  return (
    <Button text=''
      style={`absolute right-6 bottom-2/3 min-md:bottom-4/5 bg-[url('${img}')] bg-no-repeat hover:scale-120 duration-200 bg-center w-6 h-6`} //uso de windsurf para obtener una idea pero se modifico hasta dejarlo asi de una forma mas simplificada
      onClick={(e) => { e.preventDefault(); setShowPassword(!showPassword) }} />
  )
}

export const Route = createFileRoute('/Register')({
  component: RouteComponent,
})

function RouteComponent() {
    const [showPassword, setShowPassword] = useState(true);
    const [showPassword2, setShowPassword2] = useState(true);
  
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
    link='Log in now'
    buttonPasswordReveal={ <ButtonPasswordReveal showPassword={showPassword} setShowPassword={setShowPassword} />} //windsurf ayudo a hacerlo
    buttonPasswordConfirmReveal={ <ButtonPasswordReveal showPassword={showPassword2} setShowPassword={setShowPassword2} />} //windsurf ayudo a hacerlo
    buttonRegister={btnRegister}
    >
    </Register>
  )
}
