// Criar a classe Parquímetro
class Parquimetro {
    constructor(valorPagamento) {
        this._valorPagamento = valorPagamento;
    }

    contratar() {
        // Pegar valor do input
        this._valorPagamento = parseFloat(document.getElementById("valorPagamento").value);

        // Criar a var do tempo
        let tempo = 0;

        // Criar a var do valor do serviço
        let valorServico = 0;

        // Criar a var do troco
        let troco = 0;

        // Verificar se o valor do input é válido e suficiente para pagar o estacionamento. Se não for, retornar mensagem avisando de valor inválido ou insuficiente, conforme o caso
        if (isNaN(this._valorPagamento)) {
            document.getElementById("mensagens").textContent = `Valor inválido. Digitar novamente.`;
            return;
        }
        if (this._valorPagamento < 1) {
            document.getElementById("mensagens").textContent = `Valor insuficiente`;
            return;
        } 
        else {
            if ((this._valorPagamento >= 1) && (this._valorPagamento < 1.75)) {
                tempo = 30;
                valorServico = 1;
            } else if ((this._valorPagamento >= 1.75) && (this._valorPagamento < 3)) {
                tempo = 60;
                valorServico = 1.75;
            } else {
                tempo = 120;
                valorServico = 3;
            }
            troco = this._valorPagamento - valorServico;
            document.getElementById("mensagens").textContent = `Tempo de estacionamento: ${tempo} minutos. Valor do serviço: R$ ${valorServico.toFixed(2).replace('.', ',')}. Valor pago: R$ ${this._valorPagamento.toFixed(2).replace('.', ',')}. Troco: R$ ${troco.toFixed(2).replace('.', ',')}`;
            return;
        }
    }
}

// Criar o objeto Parquímetro
const parquimetro = new Parquimetro();

