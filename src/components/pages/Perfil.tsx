import { Link } from '@tanstack/react-router'

import type React from 'react';

interface PerfilProps {
  btnBack: React.ReactNode;
  title: string;
  img: string;
  alt: string;
  name: string;
  email: string;
  btnEdit: React.ReactNode;
  donation: string;
  notifications: string;
  changePassword: string;
  setting: string
}


export default function CreateDonation(props: PerfilProps) {


  return (
    <section>
      <div className="flex flex-col justify-center items-center min-h-dvh text-green-900 font-fredoka pb-8 ">
        <div className="flex justify-center items-center w-full pb-10">
          <h1 className="flex justify-center items-center mr-8 gap-x-5 text-3xl font-regular min-md:text-3xl text-black">
            {props.btnBack}
            {props.title}
          </h1>
        </div>

        <img className="border-10 border-lime-200 rounded-full" src={props.img} alt={props.alt} />
        <h4 className='font-semibold text-2xl pt-5'>{props.name}</h4>
        <h4>{props.email}</h4>
        {props.btnEdit}

        <div className="flex flex-col gap-5 pt-5 w-4/7">
          <Link to="/CreateDonation" className="flex items-center gap-4 hover:scale-105 duration-300 cursor-pointer">
            <img src="heart.svg" alt="Donation" className="w-15 h-15 text-green-800" />
            <h3 className="text-lg">{props.donation}</h3>
          </Link>

          <Link to='/Notifications' className="flex items-center gap-4 hover:scale-105 duration-300 cursor-pointer">
            <img src="belll.svg" alt="Notifications" className="w-15 h-15 text-green-800" />
            <h3 className="text-lg">{props.notifications}</h3>
          </Link>

          <Link to="/" className="flex items-center gap-4 hover:scale-105 duration-300 cursor-pointer">
            <img src="key.svg" alt="Change Password" className="w-15 h-15 text-green-800" />
            <h3 className="text-lg">{props.changePassword}</h3>
          </Link>

          <Link to="/" className="flex items-center gap-4 hover:scale-105 duration-300 cursor-pointer">
            <img src="Configuration.svg" alt="Settings" className="w-15 h-15 text-green-800" />
            <h3 className="text-lg">{props.setting}</h3>
          </Link>
        </div>
      </div>
    </section>

  );
}
