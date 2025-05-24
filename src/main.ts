import './style.css'

import { Button } from './components/Button.ts';
import { Background } from './components/Background.ts';
import { Principal } from './components/Principal.ts';
import { Login } from './components/Login.ts';


const bg_principal = new Background(`bg-lime-100`)
const principal = new Principal(
    'Donático',
    'perezoso.svg',
    'Perezoso',
    bg_principal
);


const btn_login = new Button('Log In', 'text-white bg-green-900 duration-400 hover:cursor-pointer hover:scale-110 hover:bg-green-950 rounded-xl py-2  min-md:py-4');
const login = new Login(
    'Log In',
    'Email',
    'Password',
    'Don’t have an account?',
    'Sign Up',
    btn_login
)

principal.renderHTML()


document.getElementById('principal')?.addEventListener('click', () => {

    setTimeout(() => {
        // document.getElementById('principal')?.remove(); esto podria funcionar para que no se acumule cache o demas 
        login.renderHTML()
    }, 5000)
});

