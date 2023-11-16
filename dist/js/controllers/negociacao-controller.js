import { MsgView } from './../views/msg-view.js';
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { DiaDaSemana } from '../enums/dia-da-semana.js';
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#ts-negociacoes-view', true);
        this.msgView = new MsgView("#msg-view");
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (negociacao.data.getDay() > DiaDaSemana.Domingo && negociacao.data.getDay() < DiaDaSemana.Sabado) {
            this.negociacoes.adiciona(negociacao);
            this.limpaFormulario();
            this.atualizaView();
        }
        else {
            this.msgView.update("Por favor, insira apenas negociações feitas em dias úteis");
        }
    }
    limpaFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.msgView.update('Negociação criada e adicionada com sucesso!');
    }
}
