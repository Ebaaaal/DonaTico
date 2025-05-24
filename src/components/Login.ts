import { Button } from "./Button";

export class Login {
    constructor(
        public title: string,
        public email: string,
        public password: string,
        public text: string,
        public button?: Button
    ) { }

    renderHTML() {
        return document.body.innerHTML = `
        
        `
     }
}