export function logarTempoDeExecucao(emSegundos: boolean = false) {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: any[]) {
            let divisor = 1;
            let unidade = 'milisegundos';
            if(emSegundos) {
                divisor = 1000;
                unidade = 'segundos';
            }
            const tempoInicial =  performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const tempoFinal = performance.now()
            console.log(`${propertyKey}, tempo de execução: ${(tempoFinal - tempoInicial)/divisor} ${unidade}`);
            retorno;
        };

        return descriptor;
    }
}