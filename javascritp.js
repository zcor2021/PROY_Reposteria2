

const imagenes = document.querySelector(".imagenes");
const derecha = document.querySelector(".derecha");
const izquierda = document.querySelector(".izquierda");


if(imagenes && derecha && izquierda){


    // Calcula automáticamente el tamaño de una tarjeta + el espacio
    function obtenerMovimiento(){

        const tarjeta = document.querySelector(".cajaaa");

        const estilo = window.getComputedStyle(imagenes);

        const espacio = parseFloat(estilo.gap);

        return tarjeta.offsetWidth + espacio;

    }



    // Botón derecha
    derecha.addEventListener("click",()=>{


        let movimiento = obtenerMovimiento();


        imagenes.style.transition = "transform .5s ease";

        imagenes.style.transform = 
        `translateX(-${movimiento}px)`;



        setTimeout(()=>{


            // Mueve la primera tarjeta al final
            imagenes.style.transition = "none";


            let primera = imagenes.firstElementChild;

            imagenes.appendChild(primera);


            imagenes.style.transform = "translateX(0)";



        },500);



    });





    // Botón izquierda
    izquierda.addEventListener("click",()=>{


        let movimiento = obtenerMovimiento();



        imagenes.style.transition = "none";


        // Mueve la última tarjeta al inicio

        let ultima = imagenes.lastElementChild;

        imagenes.insertBefore(ultima, imagenes.firstElementChild);



        // coloca la posición para hacer la animación inversa

        imagenes.style.transform =
        `translateX(-${movimiento}px)`;



        setTimeout(()=>{


            imagenes.style.transition="transform .5s ease";

            imagenes.style.transform="translateX(0)";


        },20);



    });



}