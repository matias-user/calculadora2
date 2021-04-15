const botones = document.querySelectorAll('button');
const input = document.querySelector('#input');

let valorClick;
let valores = [];
let valores2 = [];
let bandera = true;
//Agregar los eventListeners
botones.forEach( btn => {
    
    btn.addEventListener('click', e => {
        
        if( isNaN( e.target.value ) ) valorClick = e.target.value;
        else valorClick = parseInt( e.target.value);

        evaluarClick();

        console.log(valores);
        console.log(valores2);
    });
});

function agregarClick( array ){

    array.push( valorClick );
};

function borrarClick( bandera ){

    let bandera1 = bandera;

    if( valores2.length == 0 ){  
    bandera1 = true;
    console.log(bandera1);
    };

    if( bandera1 )valores.pop( valores.length - 1); //El ultimo elemento se borrara.
    else valores2.pop( valores.length - 1);       
        
};
function borrarTodo(){

    valores = [];
    valores2 = [];
};

function evaluarClick(){

    if( valorClick !== 'atras' &&  valorClick !== 'borrar' && valorClick !== 'resultado' && valorClick !== '+'){

        if(bandera) agregarClick(  valores );
        else agregarClick( valores2 );
    };

    if( valorClick === 'atras' ) borrarClick( bandera );

    if( valorClick === 'borrar' ) borrarTodo();

    if( valorClick === '+' || valorClick === '-' || valorClick === '*' || valorClick === '/' ) bandera = false ; console.log(bandera);

    if( valorClick === 'resultado'){
        
        calcularResultado();
        bandera = true;
    } 
};

function calcularResultado(){ //Hasta ahora tengo funcionando suma.

    const reduce = valores.reduce( (acc, valor )=> acc + valor);
    const reduce2 = valores2.reduce( (acc, valor )=> acc + valor);

    const suma = reduce + reduce2;
    valores.length = 0;
    valores2.length = 0;
    input.value = suma.toString();
};