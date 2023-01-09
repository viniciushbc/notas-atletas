let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas: [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
];

function exibirMediaAtletas(atletas) {
    for (let i = 0; i < atletas.length; i++) {
        let notasComputadas = atletas[i].notas.slice();
        notasComputadas = notasComputadas.sort(function (a, b) { return a - b; }).slice(1, 4);
        let soma = 0;
        notasComputadas.forEach(function (nota) {
            soma = soma + nota;
        })
        console.log("Atleta: " + atletas[i].nome + "\nNotas Obtidas: " + atletas[i].notas.join(",") + "\nMédia Válida: " + soma / notasComputadas.length)
    }
}