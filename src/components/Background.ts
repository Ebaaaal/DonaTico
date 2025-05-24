export class Background {
    constructor(
        public styles: string
    ) { }

    renderHTML() { 
        return document.body.innerHTML = ` ${this.styles} `
    }
}