import typeReact from 'react'
import { Link } from '@tanstack/react-router'

interface Users {
  name: string;
  email: string;
  password: string;
}

interface LoginProps {
  title: string;
  email: string;
  password: string;
  text: string;
  link: string;
  data: Users[];
  buttonPasswordReveal?: React.ReactElement<{ showPassword: boolean }>;
  buttonLogin?: typeReact.ReactNode;
  onLogin: (email: string, password: string) => void;
}

export default function Login(props: LoginProps) {
  const showPassword = props.buttonPasswordReveal?.props.showPassword;
  const [emailInput, setEmailInput] = typeReact.useState('');
  const [passwordInput, setPasswordInput] = typeReact.useState('');

  const handleSubmit = (e: typeReact.FormEvent) => {
    e.preventDefault();
    props.onLogin(emailInput, passwordInput);
  };

  return (
    <section>
      <div className="flex flex-col justify-center items-center min-h-dvh text-green-900 gap-2 font-fredoka ">
        <h1 className="text-4xl font-bold min-md:text-6xl mb-15">{props.title}</h1>

        <form className="flex flex-col gap-1 w-3/4 min-md:gap-3 min-md:text-3xl min-md:w-2/3" onSubmit={handleSubmit}>
          <label className="font-semibold relative left-1/6 min-md:font-medium">{props.email}</label>
          <input
            type="email"
            className="border-b-3 mb-8 outline-none hover:scale-105 duration-300 px-8 min-md:px-28"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            required
          />

          <label className="font-semibold relative left-1/6 min-md:font-medium">{props.password}</label>
          <div className="relative">
            <input
              type={showPassword ? 'password' : 'text'}
              className="border-b-3 duration-400 hover:scale-110 outline-none mb-8 px-8 min-md:px-28 w-full"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              required
            />
            {props.buttonPasswordReveal}
          </div>

          {props.buttonLogin}
        </form>

        <div className="flex gap-4 justify-center">
          <p className="text-sm text-center min-md:text-xl hover:cursor-default">
            {props.text}
          </p>
          <Link
            to="/Register"
            className="text-sm min-md:text-xl font-semibold underline underline-offset-5 hover:scale-115 duration-400 hover:cursor-pointer"
          >
            {props.link}
          </Link>
        </div>
      </div>
    </section>
  );
}
