// ----------------------EVENTO PARALLAX----------------
        // const mainDiv = document.querySelector('.main-div');
        // const title = document.querySelector('h1');
        // const futureImg = document.getElementById('futureimg');
        // const albumsDiv = document.querySelector('.divalbums');

        // // Adiciona o evento de movimento do mouse
        // document.addEventListener('mousemove', (e) => {
        //     // Calcula a posição do mouse no centro da tela
        //     const x = (window.innerWidth / 2 - e.pageX) / 20;
        //     const y = (window.innerHeight / 2 - e.pageY) / 20;

        //     // Aplica transformações de parallax com valores diferentes para cada elemento
        //     title.style.transform = `translate(${x}px, ${y}px)`;
        //     futureImg.style.transform = `translate(${x / 1.5}px, ${y / 1.5}px)`;
        //     albumsDiv.style.transform = `translate(${x / 2}px, ${y / 2}px)`;
        // });

//-------------------EVENTO DA LUZ---------------

        // // Seleciona os elementos para aplicar o efeito de iluminação
        // const title1 = document.querySelector('h1');
        // const futureImg1 = document.getElementById('futureimg');
        // const albumsDiv1 = document.querySelector('.divalbums');

        // // Adiciona o evento de movimento do mouse
        // document.addEventListener('mousemove', (e) => {
        //     // Calcula a posição do mouse no centro da tela
        //     const { innerWidth, innerHeight } = window;
        //     const x = (e.pageX - innerWidth / 2) / innerWidth;
        //     const y = (e.pageY - innerHeight / 2) / innerHeight;

        //     // Configurações de intensidade e tamanho da sombra
        //     const intensity = 50;

        //     // Define sombras de acordo com a posição do mouse
        //     title1.style.boxShadow = `${x * intensity}px ${y * intensity}px 20px rgba(255, 255, 255, 0.3)`;
        //     futureImg1.style.boxShadow = `${x * intensity}px ${y * intensity}px 30px rgba(255, 255, 255, 0.2)`;
        //     albumsDiv1.style.boxShadow = `${x * intensity}px ${y * intensity}px 40px rgba(255, 255, 255, 0.1)`;

        //     // Define sombras para cada álbum individualmente
        //     document.querySelectorAll('.divalbums li').forEach((album, index) => {
        //         const offset = (index - 1) * 10; // Ajusta a sombra para cada álbum
        //         album.style.boxShadow = `${(x * intensity) + offset}px ${(y * intensity) + offset}px 20px rgba(255, 255, 255, 0.15)`;
        //     });
        // });