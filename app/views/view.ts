export abstract class View<T> {
    protected element: HTMLElement;
    private escapar: boolean = false;

    constructor(seletor: string, escapar?: boolean) {
        const elemento = document.querySelector(seletor);
        if(elemento) {
            this.element = document.querySelector(seletor) as HTMLElement;
        } else {
            throw Error(`O seletor ${seletor} não existe no DOM. Verifique`);
        }
        
        if(escapar) {
            this.escapar = escapar;
        }
    }

    protected abstract template(model: T): string;

    public update(model: T): void {
        let template = this.template(model);
        if(this.escapar) {
            template = template.replace(/<script>[\s\S]*?<script>/, '')
        }
        this.element.innerHTML = template;
    }
}