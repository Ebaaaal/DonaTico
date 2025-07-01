

import { useState } from 'react';

interface editProfileProps {
    btnBack: React.ReactNode
    imgProfile: string;
    title: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    imgAdd: string;
    buttonEdit?: React.ReactNode;
}


export default function EditProfile(props: editProfileProps) {
    const [size, setSize] = useState(0);
    const [name, setName] = useState('');

    console.log(size);
    console.log(name);


    return (
        <section className='flex flex-col justify-center items-center min-h-dvh gap-6 min-md:my-25'>
            <div className="flex flex-col items-center w-3/4 text-green-900 gap-2 font-fredoka ">
                <h1 className="flex justify-center items-center mr-8 gap-x-5 text-3xl font-regular min-md:text-3xl text-black">
                    {props.btnBack}
                </h1>
                <div className="flex flex-col items-center min-md:my-20">
                    <img className="border-10 border-lime-200 rounded-full" src={props.imgProfile} alt={"{$Imagen del backend, solo quitar las comillas y agregar $}"} />
                    <h4 className='font-semibold text-2xl pt-5'>{"{$name del backend}"}</h4>
                    <h4>{"{$email del backend}"}</h4>
                </div>
                <h1 className="text-4xl font-bold min-md:text-6xl mb-15">{props.title}</h1>

                <form className="flex flex-col gap-1 w-full min-md:gap-3 min-md:text-3xl" method='PUT'>

                    <label className="font-semibold relative left-1/6 min-md:font-medium">{props.name}</label>
                    <input type="name" className=" border-b-3 mb-8 outline-none hover:scale-105 duration-300 px-8 min-md:px-28 min-md:mb-15" />

                    <label className="font-semibold relative left-1/6 min-md:font-medium">{props.email}</label>
                    <input type="email" className="border-b-3 mb-8 outline-none hover:scale-105 duration-300 px-8 min-md:px-28 min-md:mb-15" />

                    <label className="font-semibold relative left-1/6 min-md:font-medium">{props.phone}</label>
                    <input type="number" className=" border-b-3 mb-8 outline-none hover:scale-105 duration-300 px-8 min-md:px-28 min-md:mb-15" />

                    <label className="font-semibold relative left-1/6 min-md:font-medium">{props.address}</label>
                    <input type="text" className=" border-b-3 mb-8 outline-none hover:scale-105 duration-300 px-8 min-md:px-28 min min-md:mb-15" />

                    <label className="font-semibold relative left-1/6 min-md:font-medium">{props.imgAdd}</label>
                    <label htmlFor="fileInput" className='cursor-pointer'>
                        <div className='border-b-3 mb-8  hover:scale-105 duration-300 px-8 min-md:px-28 min min-md:mb-15'>
                            {size === 0 ? 'Subir imagen' : `${name}`}
                        </div>
                    </label>

                    <input id="fileInput" type="file" accept=" image/png, image/jpg, image/jpeg/*" className="hidden"
                        onChange={(e) => { const file = e.target.files![0]; if (!file) return setSize(0); setSize(file.size); setName(file.name) }} />

                    {props.buttonEdit ? props.buttonEdit : ''}
                </form>
            </div>
        </section>
    )
}