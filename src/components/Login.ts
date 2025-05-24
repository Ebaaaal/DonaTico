import { Button } from "./Button";

export class Login {
    constructor(
        public title: string,
        public email: string,
        public password: string,
        public text: string,
        public link: string,
        public button?: Button,
        
    ) { }

    renderHTML() {
        return document.body.innerHTML = `
        <section>
            <div class="flex flex-col justify-center items-center min-h-dvh text-green-900 gap-10 font-fredoka  min-md:gap-20">
                <h1 class="text-4xl font-bold min-md:text-6xl">${this.title}</h1>
                    
                    <div class="flex flex-col gap-1 w-3/4 min-md:gap-3 min-md:text-3xl min-md:w-2/3">
                        <label for="email" class="font-semibold relative left-1/6 min-md:font-medium">${this.email}</label>
                        <input type="email" class="border-b border-b-1 mb-8 outline-none hover:scale-105 duration-300 min-md:border-b-3 min-md:mb-15" />

                        <label for="password" class="font-semibold relative left-1/6 min-md:font-medium">${this.password}</label>
                        <input type="password" class="border-b border-b-1 outline-none mb-8 hover:scale-105 duration-300 min-md:border-b-3 min-md:mb-20" />
                    
                    
                    ${this.button?.renderHTML()}

                    <a href="Register.ts" class="text-sm text-center min-md:text-xl hover:scale-115 duration-400">${this.text} <span class="font-semibold underline underline-offset-5">${this.link}</span> </a>


                    </div>
            </div>
        </section>

        `
    }
}