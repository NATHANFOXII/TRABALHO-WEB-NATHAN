

document.addEventListener("DOMContentLoaded", function() { // codigo d aleatoriedade para as texturas dos post (ainda não funcional)//

   // 1. Primeiro criamos a lista de posts
   const todosOsPosts = document.querySelectorAll('.post');
   
   // 2. Depois exibimos no console (isso ajuda a debugar)
   console.log("Posts encontrados: " + todosOsPosts.length);

    const listaDeTexturas = [
        'textura_post_1.jpg',
        'textura_post_2.jpg',
        'textura_post_3.jpg'
    ];

    todosOsPosts.forEach(post => {
        const indiceSorteado = Math.floor(Math.random() * listaDeTexturas.length);
        console.log("Sorteando textura: " + listaDeTexturas[indiceSorteado]);
        
        // Aplica a imagem de fundo sorteada
        post.style.backgroundImage = "url('" + listaDeTexturas[indiceSorteado] + "')";
    });
});


function curtirPost(){ // funýýo execultada quando o usýario clica no botýo curtir

    alert("voý curtiu o post");
}