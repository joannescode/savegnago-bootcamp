function ContabilizarPratidas(vitorias, derrotas) {
    quantidadeDePartidas = vitorias + derrotas;
    saldoDeVitorias = vitorias - derrotas;
    return saldoDeVitorias
}

function definirRanking(saldoDeVitorias) {
    if (saldoDeVitorias < 10) {
        return "Ferro";
    } else if (saldoDeVitorias >= 10 && saldoDeVitorias <= 20) {
        return "Bronze";
    } else if (saldoDeVitorias >= 21 && saldoDeVitorias <= 50) {
        return "Prata";
    } else if (saldoDeVitorias >= 51 && saldoDeVitorias <= 80) {
        return "Ouro";
    } else if (saldoDeVitorias >= 81 && saldoDeVitorias <= 90) {
        return "Diamante";
    } else if (saldoDeVitorias >= 91 && saldoDeVitorias <= 100) {
        return "Lendário";
    } else if (saldoDeVitorias >= 101) {
        return "Imortal";
    }
}

saldoDeVitorias = ContabilizarPratidas(100, 4);
rankingDoHeroi = definirRanking(saldoDeVitorias);

console.log(`O Herói tem saldo de ${saldoDeVitorias} está no nível de ${rankingDoHeroi}`);
