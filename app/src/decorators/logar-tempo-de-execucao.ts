export function logarTempoDeExecucao() {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: any[]) {
            const tempoInicial =  performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const tempoFinal = performance.now()
            console.log(`${propertyKey}, tempo de execução: ${(tempoFinal - tempoInicial)/1000} segundos`);
            retorno;
        };

        return descriptor;
    }
}