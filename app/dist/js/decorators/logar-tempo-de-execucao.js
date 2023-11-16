export function logarTempoDeExecucao() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const tempoInicial = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const tempoFinal = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(tempoFinal - tempoInicial) / 1000} segundos`);
            retorno;
        };
        return descriptor;
    };
}
