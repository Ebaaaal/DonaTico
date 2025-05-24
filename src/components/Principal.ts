import { Background } from "./Background";


export class Principal {
    constructor(
        public title: string,
        public img: string,
        public alt: string,
        public background?: Background,


    ) { }

    renderHTML() {
        return document.body.innerHTML = `
        <div class="flex flex-col justify-center items-center min-h-dvh bg-lime-100 ">
         <h1 class="relative background-image: url('${this.img}') font-fredoka text-green-900 text-5xl font-bold">${this.title}
             <img class="absolute w-1/5 -top-4 -left-1 " src="${this.img}" alt="${this.alt}">
         </h1>
        </div>
        ` 
    }
}