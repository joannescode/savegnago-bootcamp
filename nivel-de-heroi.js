let informations_hero = {
    nome: "Carnival",
    "xp level": 10001
}

const niveis = {
    "Ferro": (x) => x < 1000,
    "Bronze": (x) => x >= 1001 && x < 2000,
    "Prata": (x) => x >= 2001 && x < 5000,
    "Ouro": (x) => x >= 5001 && x < 7000,
    "Platina": (x) => x >= 7001 && x < 8000,
    "Ascendente": (x) => x >= 8001 && x < 9000,
    "Imortal": (x) => x >= 9001 && x < 10000,
    "Radiante": (x) => x >= 10001,
}

for (const nivel in niveis) {
    if (niveis[nivel](informations_hero["xp level"])) {
        console.log(`O heroi de nome ${informations_hero["nome"]} esta no nivel de ${nivel}`);
        break;
    }
}