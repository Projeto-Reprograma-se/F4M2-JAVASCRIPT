
const prompt = require('prompt-sync')();

idade = parseInt(prompt("Digite sua idade: "));
tempo = parseInt(prompt("Digite seu tempo de serviço: "));
salario = parseFloat(prompt("Digite seu salário: "));

// Implementar o comando de decisão para verificar se o cidadão pode, ou não, se aposentar
if (idade >= 65 || tempo >= 30 || idade >= 60 && idade >= 25) {
  console.log("Você pode se aposentar!");
  // Implementar os comandos de decisão aninhados para calcular o salário de aposentadoria (80% ou 60%)
  if (tempo > 20) {
    aposento = salario * 0.8;
  } else {
    aposento = salario * 0.6;
  }
  // Implementar os comandos de decisão aninhados para garantir o salário de aposentadoria dentro dos limites inferior (R$ 1212,00) e superior (R$ 7087,22)
  if (aposento > 7087.22) {
    aposento = 7087.22;
  } else if (aposento < 1212) {
    aposento = 1212;
  }
  console.log("Seu salário de aposento será:", aposento);
} else {
  console.log("Você não pode aposentar!");
}
