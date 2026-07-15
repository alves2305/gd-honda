// FOTO PERFIL
const perfil = document.querySelector('.perfil');

if(perfil){

  perfil.addEventListener('click', () => {

    perfil.classList.toggle('perfil-ativa');

  });

}


// BOTÃO TOPO
const topoBtn = document.getElementById('topoBtn');

if(topoBtn){

  window.addEventListener('scroll', () => {

    if(window.scrollY > 300){

      topoBtn.style.display = 'block';

    }else{

      topoBtn.style.display = 'none';

    }

  });

  topoBtn.addEventListener('click', () => {

    window.scrollTo({
      top:0,
      behavior:'smooth'
    });

  });

}


// ANIMAÇÃO DOS CARDS
const cards = document.querySelectorAll('.card-moto');

window.addEventListener('scroll', () => {

  cards.forEach((card) => {

    const cardTop =
    card.getBoundingClientRect().top;

    if(cardTop < window.innerHeight - 100){

      card.classList.add('mostrar');

    }

  });

});


// // TEXTO DIGITANDO
// const elemento =
// document.getElementById('texto-digitando');

// if(elemento){

//   const texto =
//   'Não importa o quão alto seja o seu sonho, a gente chega lá!';

//   let i = 0;

//   function escrever(){

//     if(i < texto.length){

//       elemento.innerHTML += texto.charAt(i);

//       i++;

//       setTimeout(escrever, 40);

//     }

//   }

//   escrever();

// }


// LOADING
// ==========================
// LOADING SCREEN
// ==========================

const loading = document.getElementById("loading");
const progress = document.getElementById("loading-progress");
const percent = document.getElementById("loading-percent");

let valor = 0;

const intervalo = setInterval(() => {

    valor++;

    progress.style.width = valor + "%";

    percent.textContent = valor + "%";

    if(valor >= 100){

        clearInterval(intervalo);

    }

},20);

window.addEventListener("load",()=>{

    setTimeout(()=>{

        loading.style.opacity="0";

        setTimeout(()=>{

            loading.style.display="none";

        },600);

    },300);

});

// PESQUISA DE MOTOS
const pesquisa =
document.getElementById('pesquisa');

const motos =
document.querySelectorAll('.card-moto');

if(pesquisa){

  pesquisa.addEventListener('input', () => {

    const valor =
    pesquisa.value
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

    motos.forEach((moto) => {

      const nomeMoto =
      moto.querySelector('h3')
      .innerText
      .toLowerCase()
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

      if(nomeMoto.includes(valor)){

        moto.style.display = 'block';

      }else{

        moto.style.display = 'none';

      }

    });

  });

}


const enviarWhatsapp =
document.getElementById('enviarWhatsapp');

if (enviarWhatsapp) {

  enviarWhatsapp.addEventListener('click', () => {

    // ==========================
    // CAMPOS
    // ==========================

    const nomeCompleto = document.getElementById('nomeCompleto');
    const cidade = document.getElementById('cidade');
    const primeiraParcela = document.getElementById('primeiraParcela');

    const valorEntrada = document.getElementById('valorEntrada');
    const cpf = document.getElementById('cpf');
    const telefone = document.getElementById('telefone');
    const dataNascimento = document.getElementById('dataNascimento');
    const endereco = document.getElementById('endereco');
    const email = document.getElementById('email');
    const profissao = document.getElementById('profissao');
    const renda = document.getElementById('renda');

    const numero = '5574999153482';



    // ==========================
    // CONSÓRCIO
    // ==========================

    if (primeiraParcela) {

      if (!nomeCompleto.value.trim()) {
        alert('Por favor, informe o nome completo.');
        nomeCompleto.focus();
        return;
      }

      if (!cidade.value.trim()) {
        alert('Por favor, informe a cidade.');
        cidade.focus();
        return;
      }

      if (!primeiraParcela.value.trim()) {
        alert('Por favor, escolha um plano.');
        primeiraParcela.focus();
        return;
      }

      const mensagem =
`Olá GD, gostaria de fazer agora meu consórcio da ${nomeMoto}.

Nome completo: ${nomeCompleto.value}

Cidade: ${cidade.value}

Plano escolhido: ${primeiraParcela.value}`;

      window.open(
        `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`,
        '_blank'
      );

      return;
    }



    // ==========================
    // FINANCIAMENTO
    // ==========================

    if (valorEntrada) {

      if (!valorEntrada.value.trim()) {
        alert('Por favor, informe o valor da entrada.');
        valorEntrada.focus();
        return;
      }

      if (!cpf.value.trim()) {
        alert('Por favor, informe o CPF.');
        cpf.focus();
        return;
      }

      if (!nomeCompleto.value.trim()) {
        alert('Por favor, informe o nome completo.');
        nomeCompleto.focus();
        return;
      }

      if (!telefone.value.trim()) {
        alert('Por favor, informe o telefone.');
        telefone.focus();
        return;
      }

      if (!dataNascimento.value.trim()) {
        alert('Por favor, informe a data de nascimento.');
        dataNascimento.focus();
        return;
      }

      const mensagem =
`Olá GD, gostaria de fazer uma simulação de financiamento da ${nomeMoto}.

Valor da entrada: ${valorEntrada.value}

CPF: ${cpf.value}

Nome completo: ${nomeCompleto.value}

Telefone: ${telefone.value}

Data de nascimento: ${dataNascimento.value}`;

      window.open(
        `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`,
        '_blank'
      );

      return;
    }


    alert('Formulário não reconhecido.');

  });

}