import { Imprimivel } from "../interfaces/imprimivel.js";

export function imprimir(...objs: Imprimivel[]): void {
    for(let obj of objs) {
        console.log(obj.paraTexto());
    }
}