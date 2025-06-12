// --- 1. SELECIONA TODOS OS ELEMENTOS NECESSÁRIOS ---
const fotosDaGaleria = document.querySelectorAll('.foto-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const btnFechar = document.querySelector('.lightbox-fechar');
const btnAnterior = document.querySelector('.lightbox-anterior');
const btnProximo = document.querySelector('.lightbox-proximo');

let imagemAtualIndex;

// --- 2. FUNÇÕES ---

// Função para abrir o lightbox
const abrirLightbox = (imgSrc, index) => {
    lightbox.classList.remove('lightbox-oculto');
    lightbox.classList.add('lightbox-visivel');
    lightboxImg.src = imgSrc;
    imagemAtualIndex = index;
};

// Função para fechar o lightbox
const fecharLightbox = () => {
    lightbox.classList.remove('lightbox-visivel');
    lightbox.classList.add('lightbox-oculto');
};

// Função para mostrar a próxima imagem
const mostrarProximaImagem = () => {
    imagemAtualIndex = (imagemAtualIndex + 1) % fotosDaGaleria.length;
    lightboxImg.src = fotosDaGaleria[imagemAtualIndex].src;
};

// Função para mostrar a imagem anterior
const mostrarImagemAnterior = () => {
    imagemAtualIndex = (imagemAtualIndex - 1 + fotosDaGaleria.length) % fotosDaGaleria.length;
    lightboxImg.src = fotosDaGaleria[imagemAtualIndex].src;
};

// --- 3. ADICIONA OS EVENTOS ---

// Adiciona evento de clique para cada foto da galeria
fotosDaGaleria.forEach((img, index) => {
    img.addEventListener('click', () => {
        abrirLightbox(img.src, index);
    });
});

// Evento para fechar o lightbox
btnFechar.addEventListener('click', fecharLightbox);
btnProximo.addEventListener('click', mostrarProximaImagem);
btnAnterior.addEventListener('click', mostrarImagemAnterior);

// Evento para fechar com a tecla "Esc"
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        fecharLightbox();
    }
});