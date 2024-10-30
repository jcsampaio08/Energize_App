// Função para voltar à página anterior
function voltarPagina() {
    window.history.back();
}

// Função para 'pular' pro Feed
function pular(){
    window.location.href = "index"
}

// Função altera "página"
let imagens = [
    "energize/static/images/inicio/menino.png",
    "energize/static/images/inicio/menina.png",
    "energize/static/images/inicio/cozinheiro.png",
    "energize/static/images/inicio/menina_celular.png",
];

let titulos = [
    "Viva bem",
    "Treine bem",
    "Alimente-se bem",
    "Compartilhe"
];

let descricoes = [
    'Carpe diem! Aproveite cada momento e viva o presente com intensidade e alegria.',
    'Manter o corpo ativo é essencial para uma vida saudável e equilibrada.',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta saepe inventore quae nihil.',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta saepe inventore quae nihil.'
];

let indiceAtual = 0;

// Inicializa a página com a imagem e o conteúdo da primeira página
function inicializarPagina() {
    document.getElementById("img_desc").className = `img_${indiceAtual + 1}`; // Classe inicial
    document.getElementById("titulo").innerText = titulos[indiceAtual];
    document.getElementById("descricao").innerText = descricoes[indiceAtual];
}

// Chama a função para inicializar a página
inicializarPagina();

function proximaPag() {
    
    if(indiceAtual === imagens.length -1){
        pular();
        document.getElementById("linkPular").style.display = "none";
    }
    else{
        indiceAtual = (indiceAtual + 1) % imagens.length;
    }

    document.querySelector(".story.active").classList.remove("active");
    document.getElementById("img_desc").src = imagens[indiceAtual];
    document.getElementById("img_desc").className = `img_${indiceAtual + 1}`; // Aplica a classe dinamicamente
    document.getElementById("titulo").innerText = titulos[indiceAtual];
    document.getElementById("descricao").innerText = descricoes[indiceAtual];

    // Atualiza o nav_story para refletir a mudança
    let stories = document.querySelectorAll(".story");
    stories[indiceAtual].classList.add("active");


    stories[indiceAtual].classList.add("active");
}


