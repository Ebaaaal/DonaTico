import { createFileRoute } from '@tanstack/react-router'

import Login from '../components/pages/Login'
import Button from '../components/Button'
import { useState } from 'react'

export const Route = createFileRoute('/Login')({
  component: RouteComponent,
})


function ButtonPasswordReveal({ showPassword, setShowPassword }: any) {

  const img = showPassword ? 'ojoabierto.svg' : 'ojociego.svg'; 
  return (
    <Button text=''
      style={`absolute right-6 bottom-2/3 bg-[url('${img}')] bg-no-repeat hover:scale-120 duration-200 bg-center w-6 h-6`} //uso de windsurf para obtener una idea pero se modifico hasta dejarlo asi de una forma mas simplificada
      onClick={() => { setShowPassword(!showPassword) }} />
  )
}

const buttonLogin = (
  <Button text='Log In'
    style='text-white text-center bg-green-900 duration-400 hover:cursor-pointer hover:scale-110 hover:bg-green-950 rounded-xl py-2 min-md:py-4'
    link='/HomePage' />
)

function RouteComponent() {
  const [showPassword, setShowPassword] = useState(true);


  return (

    < Login
      title='Log in'
      email='Email'
      password='Password'
      text='Don`t have an account?'
      link='Sign up'
      buttonPasswordReveal={ <ButtonPasswordReveal showPassword={showPassword} setShowPassword={setShowPassword} />} //windsurf ayudo a hacerlo
      buttonLogin={buttonLogin}
    ></Login >
  )

}
