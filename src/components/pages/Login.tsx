import typeReact from 'react'
import { Link } from '@tanstack/react-router'

interface LoginProps {
    title: string;
    email: string;
    password: string;
    text: string;
    link: string;
    buttonPasswordReveal?: React.ReactElement<{ showPassword: boolean; }>; //windsurf: como hacer para poder reconocer el componente 
    buttonLogin?: typeReact.ReactNode;
}


export default function Login(props: LoginProps) {
    const showPassword = props.buttonPasswordReveal?.props.showPassword === false;

    return (
        <section>
            <div className="flex flex-col justify-center items-center min-h-dvh text-green-900 gap-2 font-fredoka ">
                <h1 className="text-4xl font-bold min-md:text-6xl mb-15">{props.title}</h1>

                <form className="flex flex-col gap-1 w-3/4 min-md:gap-3 min-md:text-3xl min-md:w-2/3" method='POST'>
                    <label className="font-semibold relative left-1/6 min-md:font-medium">{props.email}</label>
                    <input type="email" className=" border-b-3 mb-8 outline-none hover:scale-105 duration-300 pl-12" />

                    <label className="font-semibold relative left-1/6 min-md:font-medium">{props.password}</label>
                    <div className='relative '>
                        <input type={showPassword ? "text" : "password"} className=" border-b-3 duration-400 hover:scale-110 outline-none mb-8 pl-12 w-full" />
                        {props.buttonPasswordReveal ? props.buttonPasswordReveal : ''}
                    </div>

                    {props.buttonLogin ? props.buttonLogin : ''}

                </form>
                <div className="flex gap-4 justify-center">
                    <p className="text-sm text-center min-md:text-xl hover:cursor-default ">{props.text} </p> <Link to="/Register" className="text-sm  min-md:text-xl font-semibold underline underline-offset-5 hover:scale-115 duration-400 hover:cursor-pointer">{props.link}</Link>
                </div>
            </div>
        </section>

    )


}