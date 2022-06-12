// removendo elementos do array


const notas = [10, 8, 7, 9, 10]

console.log(`Antes de remover o ultimo dado da lista de notas ${notas}`)

//const media = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4]) / notas.length;
const media = (notas) / notas.length;

for(i = 0; notas.length < i; i ++){
    media = notas + notas;
}

for (i = 0; i < notas.length;) {
    console.log("Iniciando o for")
    console.log(notas)
    console.log(media);
    notas.pop()
}
