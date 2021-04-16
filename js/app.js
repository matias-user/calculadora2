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

    });
});

function agregarClick( array ){

    array.push( valorClick );
    console.log(valores);
    console.log(valores2);
};

function borrarClick( bandera ){

    let bandera1 = bandera;

    if( valores2.length == 0 ){  
    bandera1 = true;
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

    if( valorClick === '+' || valorClick === '-' || valorClick === '*' || valorClick === '/' ) bandera = false ;

    if( valorClick === 'resultado'){
        
        calcularResultado();
        bandera = true;
    } 
};


function calcularResultado(){ //Hasta ahora tengo funcionando suma.
    
    let concat = '';
    const nuevcArray = valores.map(  elemento => {
        
        concat +=  elemento.toString(); 
        
    });
    console.log( concat );
    
    let concat2 = '';
    const nuevcArray2 = valores2.map(  elemento => {
        
        concat2 +=  elemento.toString(); 
        
    });
    const parseado = parseInt(concat);
    const parseado2 = parseInt(concat2);

    const result = parseado + parseado2;

    input.value = result.toString();

    valores.length = 0;
    valores2.length = 0;

    concat = 0;
    concat2 = 0;

    return result;
};
