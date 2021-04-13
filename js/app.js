const botones = document.querySelectorAll('button');

let valorClick;
const valores = [];
//Agregar los eventListeners
botones.forEach( btn => {
    
    btn.addEventListener('click', e => {
        
        valorClick = e.target.value;

        evaluarClick();

        console.log(valores);
    });
});

function agregarClick(){

    valores.push( valorClick );
};

function borrarClick(){

    valores.pop( valores.length - 1); //El ultimo elemento se borrara.
};
function evaluarClick(){

    if( valorClick !== 'atras' &&  valorClick !== 'borrar' && valorClick !== 'resultado') agregarClick();

    if( valorClick === 'atras' ) borrarClick();
};