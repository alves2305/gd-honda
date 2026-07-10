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

if(enviarWhatsapp){

  enviarWhatsapp.addEventListener('click', () => {

    const cpf =
    document.getElementById('cpf');

    const nomeCompleto =
    document.getElementById('nomeCompleto');

    const endereco =
    document.getElementById('endereco');

    const email =
    document.getElementById('email');

    const profissao =
    document.getElementById('profissao');

    const renda =
    document.getElementById('renda');

    const primeiraParcela =
    document.getElementById('primeiraParcela');

    const formaPagamento =
    document.getElementById('formaPagamento');


    // VALIDAÇÃO
    if(cpf.value === ''){
      alert('Por favor, preencha o CPF.');
      cpf.focus();
      return;
    }

    if(nomeCompleto.value === ''){
      alert('Por favor, preencha o nome completo.');
      nomeCompleto.focus();
      return;
    }

    if(endereco.value === ''){
      alert('Por favor, preencha o endereço.');
      endereco.focus();
      return;
    }

    if(email.value === ''){
      alert('Por favor, preencha o e-mail.');
      email.focus();
      return;
    }

    if(profissao.value === ''){
      alert('Por favor, preencha a profissão.');
      profissao.focus();
      return;
    }

    if(renda.value === ''){
      alert('Por favor, preencha a renda mensal.');
      renda.focus();
      return;
    }

    if(primeiraParcela.value === ''){
      alert('Por favor, escolha um plano.');
      primeiraParcela.focus();
      return;
    }

    if(formaPagamento.value === ''){
      alert('Por favor, escolha a forma de pagamento.');
      formaPagamento.focus();
      return;
    }


    // MENSAGEM
    const mensagem =
`Olá Rafael, gostaria de fazer agora meu consórcio da ${nomeMoto}.

CPF: ${cpf.value}

Nome completo: ${nomeCompleto.value}

Endereço: ${endereco.value}

E-mail: ${email.value}

Profissão: ${profissao.value}

Renda mensal: ${renda.value}

Plano escolhido: ${primeiraParcela.value}

Forma de pagamento: ${formaPagamento.value}`;


    const numero =
    '5574999679596';

    const url =
`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, '_blank');

  });

}