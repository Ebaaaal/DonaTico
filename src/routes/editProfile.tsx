import { createFileRoute } from '@tanstack/react-router'
import EditProfile from '../components/pages/editProfile'
import Button from '../components/Button'

export const Route = createFileRoute('/editProfile')({
  component: RouteComponent,
})
const buttonLogin = (
  <Button text='Confirm'
    style='text-white text-center bg-green-900 duration-400 hover:cursor-pointer hover:scale-110 hover:bg-green-950 rounded-xl py-2 min-md:py-4'
    link='/perfil' />
)

const buttonBack = (
    <Button
      text="<< Cancel edition"
      style="text-red-700 text-2xl font-regular hover:cursor-pointer hover:scale-110 duration-400"
      onClick={() => window.history.go(-1)}
    />
  )

function RouteComponent() {
  return <EditProfile
    btnBack={buttonBack}
    imgProfile='perfil.svg'
    title='Edit Profile'
    name='New name'
    email='New email Address'
    phone='New phone Number'
    address='New address'
    imgAdd='New image'
    buttonEdit={buttonLogin} >
  </EditProfile>
}
