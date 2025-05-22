function gerarSenha() {
  const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
  const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeros = "0123456789";
  const simbolos = "!@#$%&*_-+=";
  const tamanhoSenha = 12;

  const todosCaracteres = letrasMinusculas + letrasMaiusculas + numeros + simbolos;

  let senhaGerada = "";

  const letraMinAleatoria = letrasMinusculas[Math.floor(Math.random() * letrasMinusculas.length)];
  const letraMaiAleatoria = letrasMaiusculas[Math.floor(Math.random() * letrasMaiusculas.length)];
  const numeroAleatorio = numeros[Math.floor(Math.random() * numeros.length)];
  const simboloAleatorio = simbolos[Math.floor(Math.random() * simbolos.length)];

  const caracteresObrigatorios = [
    letraMinAleatoria,
    letraMaiAleatoria,
    numeroAleatorio,
    simboloAleatorio,
  ];

  const quantidadeRestante = tamanhoSenha - caracteresObrigatorios.length;

  for (let i = 0; i < quantidadeRestante; i++) {
    const aleatorio = todosCaracteres[Math.floor(Math.random() * todosCaracteres.length)];
    senhaGerada += aleatorio;
  }

  senhaGerada += caracteresObrigatorios.join("");

  const senhaFinal = senhaGerada.split("").sort(() => Math.random() - 0.5).join("");

  document.getElementById("senha").value = senhaFinal;
  document.getElementById("botaoCopiar").style.display = "inline-block";
  document.getElementById("aviso").style.display = "block";
  document.getElementById("botaoGerar").textContent = "Gerar outra senha";
}

function copiarSenha() {
  const campoSenha = document.getElementById("senha");

  if (campoSenha.value === "") {
    alert("Gere uma senha primeiro!");
    return;
  }

  campoSenha.select();
campoSenha.setSelectionRange(0, 99999);
navigator.clipboard.writeText(campoSenha.value)
  .then(() => {
    alert("Senha copiada para a área de transferência!");
  })
}
