export class Button {
    constructor(
        public text: string,
        public style: string    
    ) { }

    renderHTML() {
        return `<button class="${this.style}"> ${this.text} </button>`
    }
}