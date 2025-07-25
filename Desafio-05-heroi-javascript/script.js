const herois = [];

function onAddHeroi() {
  const inputNameElement = document.getElementById("inputName");
  const inputXPElement = document.getElementById("inputXP");

  const inputName = inputNameElement.value.trim(); // tira espaços
  const inputXP = Number(inputXPElement.value);

  if (inputName !== "" && !isNaN(inputXP)) {
    let nivel = "";

    if (inputXP <= 1000) nivel = "Ferro";
    else if (inputXP <= 2000) nivel = "Bronze";
    else if (inputXP <= 5000) nivel = "Prata";
    else if (inputXP <= 7000) nivel = "Ouro";
    else if (inputXP <= 8000) nivel = "Platina";
    else if (inputXP <= 9000) nivel = "Ascendente";
    else if (inputXP <= 10000) nivel = "Imortal";
    else nivel = "Radiante";

    // Salvar como objeto
    herois.push({ nome: inputName, nivel: nivel });

    inputNameElement.value = "";
    inputXPElement.value = "";
  } else {
    alert("Você precisa adicionar um Herói e o seu XP corretamente.");
  }

  // Atualizar a lista na tela
  const listHeroi = document.getElementById("heroi");
  listHeroi.innerHTML = "";

  herois.forEach((heroi) => {
    const p = document.createElement("p");
    p.textContent = `O Herói de nome ${heroi.nome} está no nível de ${heroi.nivel}`;
    listHeroi.appendChild(p);
  });
}
