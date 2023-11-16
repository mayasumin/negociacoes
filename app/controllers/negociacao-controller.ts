import { MsgView } from './../views/msg-view.js';
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { DiaDaSemana } from '../enums/dia-da-semana.js';

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#ts-negociacoes-view', true);
    private msgView = new MsgView("#msg-view");

    constructor() {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes);
    }

    public adiciona(): void {
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );
        if(negociacao.data.getDay() > DiaDaSemana.Domingo && negociacao.data.getDay() < DiaDaSemana.Sabado) {
            this.negociacoes.adiciona(negociacao);
            this.limpaFormulario();
            this.atualizaView();
        } else {
            this.msgView.update("Por favor, insira apenas negociações feitas em dias úteis");
        }
    }

    private limpaFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.msgView.update('Negociação criada e adicionada com sucesso!');
    }
}