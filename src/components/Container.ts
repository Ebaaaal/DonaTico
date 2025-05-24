import { Login } from './Login.ts';
import { Principal } from './Principal.ts';

export class Container {
    constructor(
        public principal?: Principal,
        public login?: Login
    ) { }


    renderHTML() {
        return document.body.innerHTML = `
          
        ${this.principal?.renderHTML()}
        ${this.login?.renderHTML()}
        
        ` 
    }
}