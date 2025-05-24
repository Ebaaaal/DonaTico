import './style.css'

import { Background } from './components/Background.ts';
import { Principal } from './components/Principal.ts';
// import { Login } from './components/Login.ts';

const bg_principal = new Background (`bg-lime-100`)

const principal = new Principal (
    'Donático', 
    'perezoso.svg', 
    'Perezoso',
    bg_principal
);

principal.renderHTML();