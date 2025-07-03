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
  likes: string
  logOut: string
}


export default function CreateDonation(props: PerfilProps) {


  return (
    <section className=''>
      <div className="flex flex-col justify-center items-center min-h-dvh text-green-900 font-fredoka min-md:my-25 ">
        <div className="flex justify-center items-center w-full pb-10">
          <h1 className="flex justify-center items-center mr-18 gap-x-15 text-3xl font-regular min-md:text-3xl text-black">
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
            <img src="heart.svg" alt="Donation" className="w-12 h-12 text-green-800" />
            <h3 className="text-lg">{props.donation}</h3>
          </Link>

          <Link to='/Notifications' className="flex items-center gap-4 hover:scale-105 duration-300 cursor-pointer">
            <img src="belll.svg" alt="Notifications" className="w-12 h-12 text-green-800" />
            <h3 className="text-lg">{props.notifications}</h3>
          </Link>

          <Link to="/" className="flex items-center gap-4 hover:scale-105 duration-300 cursor-pointer">
            <img src="key2.svg" alt="Change Password" className="w-10 h-11 text-green-800" />
            <h3 className="text-lg">{props.changePassword}</h3>
          </Link>    

          <Link to="/" className="flex items-center gap-4 hover:scale-105 duration-300 cursor-pointer pl-1">
            <img src="LogOut.svg" alt="Settings" className="w-11 h-10 text-green-800 " />
            <h3 className="text-lg">{props.logOut}</h3>
          </Link>
        </div>
      </div>
    </section>

  );
}
