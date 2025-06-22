import typeReact from 'react'
import { Link } from '@tanstack/react-router'
import { useState } from 'react'

interface RegisterProps {
    title: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    password: string;
    confirmPassword: string;
    text: string;
    link: string;
    buttonPasswordReveal?: React.ReactElement<{ showPassword: boolean; }>;
    buttonPasswordConfirmReveal?: React.ReactElement<{ showPassword: boolean; }>;
    buttonRegister?: typeReact.ReactNode;
}


export default function Register(props: RegisterProps) {
    const showPassword = props.buttonPasswordReveal?.props.showPassword === false;
    const showPasswordConfirm = props.buttonPasswordConfirmReveal?.props.showPassword === false;

    const [pass, setpass] = useState("");
    const [passConfirm, setpassConfirm] = useState("");


    const passwordMatch = () => {
        if (pass && passConfirm) { return true }
        
    }

    return (
        <section >
            <div className="flex flex-col justify-center items-center min-h-dvh text-green-900 gap-10 font-fredoka  min-md:gap-20 my-15">
                <h1 className="text-4xl font-bold min-md:text-6xl">{props.title}</h1>

                <form className="flex flex-col gap-1 w-3/4 min-md:gap-3 min-md:text-3xl min-md:w-2/3" method='POST'>

                    <label className="font-semibold relative left-1/6 min-md:font-medium">{props.name}</label>
                    <input type="name" className=" border-b-3 mb-8 outline-none hover:scale-105 duration-300 pl-12 min-md:mb-15" />

                    <label className="font-semibold relative left-1/6 min-md:font-medium">{props.email}</label>
                    <input type="email" className="border-b-3 mb-8 outline-none hover:scale-105 duration-300 pl-12 min-md:mb-15" />

                    <label className="font-semibold relative left-1/6 min-md:font-medium">{props.phone}</label>
                    <input type="number" className=" border-b-3 mb-8 outline-none hover:scale-105 duration-300 pl-12 min-md:mb-15" />

                    <label className="font-semibold relative left-1/6 min-md:font-medium">{props.address}</label>
                    <input type="text" className=" border-b-3 mb-8 outline-none hover:scale-105 duration-300 pl-12 min min-md:mb-15" />

                    <label className='font-semibold relative left-1/6 min-md:font-medium'>{props.password}</label>
                    <div className='relative '>
                        <input
                            type={showPassword ? "text" : "password"} className={`border-b-3 duration-400 hover:scale-110 ${passwordMatch() ? 'text-blue-600' : 'text-red-600'} outline-none mb-8 pl-12 w-full min-md:mb-20`}
                            value={pass}
                            onChange={(e) => { setpass(e.target.value) }}
                        />
                        {props.buttonPasswordReveal ? props.buttonPasswordReveal : ''}
                    </div>

                    <label className="font-semibold relative left-1/6 min-md:font-medium">{props.confirmPassword}</label>
                    <div className='relative '>
                        <input type={showPasswordConfirm ? "text" : "password"} className={`border-b-3 duration-400 hover:scale-110 ${passwordMatch() ? 'text-blue-600' : 'text-red-600'} outline-none mb-8 pl-12 w-full min-md:mb-20`}
                            value={passConfirm}
                            onChange={(e) => { setpassConfirm(e.target.value) }} />

                        {props.buttonPasswordConfirmReveal ? props.buttonPasswordConfirmReveal : ''}
                    </div>

                    {props.buttonRegister ? props.buttonRegister : ''}
                    <div className="flex gap-4 justify-center">
                        <p className="text-sm text-center min-md:text-xl hover:cursor-default ">{props.text} </p> <Link to="/Login" className="text-sm  min-md:text-xl font-semibold underline underline-offset-5 hover:scale-115 duration-400 hover:cursor-pointer">{props.link}</Link>
                    </div>
                </form>
            </div>
        </section>
    )
}