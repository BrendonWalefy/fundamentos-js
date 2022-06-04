//template literal


const nome = "Brendon"
const idade = 2022 - 1994
const cidadeDeNascimento = "São Miguel do Araguaia"

const nome = "Leo";
const idade = 23;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

//const apresentacao = "Meu nome é " + nome + " Minha idade é " + idade + " e nasci na cidade de " + cidadeDeNascimento;


const apresentacao = `meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeDeNascimento}`;
console.log(apresentacao)

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)