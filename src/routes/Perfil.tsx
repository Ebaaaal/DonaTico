import { createFileRoute } from '@tanstack/react-router'

import Perfil from '../components/pages/Perfil'
import Button from '../components/Button'

export const Route = createFileRoute('/Perfil')({
  component: RouteComponent,
})

const buttonBack = (
  <Button text='<'
    style='text-black text-2xl font-regular hover:cursor-pointer hover:scale-120 duration-400  '
    onClick={() => window.history.go(-1)} />

);

const btnEdit = (
  <Button text='Edit Profile '
    style=' text-2xl p-5 cursor-pointer'
    link='/editProfile' />
);


function RouteComponent() {
  return (
    <Perfil
      btnBack={buttonBack}
      title='Account'
      img='perfil.svg'
      alt='img'
      name='Name'
      email='Email Address'
      btnEdit={btnEdit}
      donation='My Donations'
      notifications='Notifications'
      changePassword='Change Password'
      likes='Likes'
      logOut='Log Out'


    ></Perfil>
  )
}
