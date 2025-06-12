    // --- 1. LISTA DE FOTOS ---
    // Coloque os nomes das suas fotos aqui. Crie uma pasta "imagens" para organizar.
    const minhasFotos = [
        'fotos/foto_olhos_insta.jpg',
        'fotos/pedido_namoro.jpg',
        'fotos/braco.jpg',
        'fotos/amor.jpg',
        'fotos/beijo.jpg',
        'fotos/deitados.jpg'
    ];

    // --- 2. ELEMENTOS DA PÁGINA ---
    const fotoElemento = document.getElementById('foto-galeria');
    const btnAnterior = document.getElementById('btn-anterior');
    const btnProximo = document.getElementById('btn-proximo');

    // --- 3. LÓGICA DA GALERIA ---
    let fotoAtualIndex = 0;

    // Função para mostrar a foto com base no index
    function mostrarFoto(index) {
        fotoElemento.src = minhasFotos[index];
    }

    // Evento do botão "Próximo"
    btnProximo.addEventListener('click', () => {
        // Incrementa o index
        fotoAtualIndex++;
        
        // Se passar da última foto, volta para a primeira
        if (fotoAtualIndex >= minhasFotos.length) {
            fotoAtualIndex = 0;
        }
        
        // Mostra a nova foto
        mostrarFoto(fotoAtualIndex);
    });

    // Evento do botão "Anterior"
    btnAnterior.addEventListener('click', () => {
        // Decrementa o index
        fotoAtualIndex--;

        // Se passar da primeira foto, vai para a última
        if (fotoAtualIndex < 0) {
            fotoAtualIndex = minhasFotos.length - 1;
        }
        
        // Mostra a nova foto
        mostrarFoto(fotoAtualIndex);
    });

    // Mostra a primeira foto assim que a página carrega
    mostrarFoto(fotoAtualIndex);