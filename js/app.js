const botones = document.querySelectorAll('button');
const input = document.querySelector('#input');
const form = document.querySelector('#form');

let valorClick;
let valores = [];
let valores2 = [];
let bandera = true;
//Agregar los eventListeners
botones.forEach( btn => {
    
    btn.addEventListener('click', e => {
        
        if( isNaN( e.target.value ) ) valorClick = e.target.value;
        else valorClick = parseInt( e.target.value);

        let result = calcularResultado();

        if( !isNaN(result) ){
            // borrarTodo();

        }

        evaluarClick( );
        mostrarEnInput( e.target.value  );
    });
});
const mostrarEnInput = ( btn ) => {


    if( btn != 'borrar' && btn != 'atras' && btn != 'resultado' ){ //para q' no agrege elementos indeseados.

        input.value = btn;
         //Hasta el momento funciona bien.
        
    }
};

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
function borrarTodo( bool = false){

    valores = [];
    valores2 = [];
    if( bool ) input.value = 0;
    
};

function evaluarClick(){

    if( valorClick !== 'atras' &&  valorClick !== 'borrar' && valorClick !== 'resultado' && valorClick !== '+'){

        if(bandera) agregarClick(  valores );
        else agregarClick( valores2 );
    };

    if( valorClick === 'atras' ) borrarClick( bandera );

    if( valorClick === 'borrar' ) borrarTodo( true);

    if( valorClick === '+' || valorClick === '-' || valorClick === '*' || valorClick === '/' ) bandera = false ;

    if( valorClick === 'resultado'){
        
        calcularResultado();
        bandera = true;
        borrarTodo();
        
    } 
};


function calcularResultado(){ //Hasta ahora tengo funcionando suma.
    
    let concat = '';
    const nuevcArray = valores.map(  elemento => {
        
        concat +=  elemento.toString(); 
        
    });
    
    let concat2 = '';
    const nuevcArray2 = valores2.map(  elemento => {
        
        concat2 +=  elemento.toString(); 
        
    });
    const parseado = parseInt(concat);
    const parseado2 = parseInt(concat2);

    const result = parseado + parseado2;

    input.value = result;
    concat = 0;
    concat2 = 0;


    return result;
};

