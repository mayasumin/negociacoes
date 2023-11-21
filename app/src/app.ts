import { NegociacaoController } from './controllers/negociacao-controller.js';

const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
} else {
    throw Error('Não foi possível inicializar a aplicação. Verifique se o form existe.');
}

const btnImporta = document.querySelector("#btn-import");
if(btnImporta) {
    btnImporta.addEventListener('click', event => {
        controller.importaDados()
    })
} else {
    throw Error('Não foi possível inicializar a aplicação. Verifique se o botão existe.');
}
