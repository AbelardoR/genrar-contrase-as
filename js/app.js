(function(){
/* variables y objetos generales */
var app = document.getElementById('app');
var inputCaracteres = document.getElementById('num');



var configuracion = {
    caracteres: parseInt(inputCaracteres.value),
    simbolos: true,
    digitos: true,
    mayusculas: true,
    minusculas: true
}
    var caracteres = {
        digitos:'0 1 2 3 4 5 6 7 8 9',
        simbolos:'! # $ % & / ( ) ¡ ? ¿ | _ - : . , @ { } [ ] + *',
        mayusculas:'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z',
        minusculas:'a b c d e f g h i j k l m n o p q r s t u v w x y z',
    }

/* eventos */
/* ---------------------------- */
/* evento para evitar un submit */
app.addEventListener('submit',function(e){
    e.preventDefault();
});
/* ---------------------------- */
/* evento para seleccionar elementos + y - */
app.elements.namedItem('btn-min').addEventListener('click',function(){
    if (configuracion.caracteres > 1) {
        configuracion.caracteres--,
    inputCaracteres.value = configuracion.caracteres
    //console.log(configuracion.caracteres);
    }
})
app.elements.namedItem('btn-mas').addEventListener('click',function(){
    if (configuracion.caracteres < 20) {
        configuracion.caracteres++,
    inputCaracteres.value = configuracion.caracteres
    //console.log(configuracion.caracteres);
    }
})
/* funciones */
/* ---------------------------- */
app.elements.namedItem('btn-sim').addEventListener('click', function(){
    btnToggle(this);
    configuracion.simbolos = !configuracion.simbolos;
});

app.elements.namedItem('btn-dig').addEventListener('click', function(){
    btnToggle(this);
    configuracion.digitos = !configuracion.digitos;
});

app.elements.namedItem('btn-mayus').addEventListener('click', function(){
    btnToggle(this);
    configuracion.mayusculas = !configuracion.mayusculas;
});

/*boton generar contraseña*/
app.elements.namedItem('btn-gene').addEventListener('click', function(){
    gpass(this);
});
/* evento copiado */
app.elements.namedItem('input-pass').addEventListener('click', function(){
    copiarpass(this);
});


/* funcion cambiar icono elemento */
function btnToggle(elemento) {
    elemento.classList.toggle('false');
    elemento.childNodes[0].classList.toggle('fa-check');
    elemento.childNodes[0].classList.toggle('fa-times');
}
/* funcion generar contraseña */
function gpass(params){
    var carfin = '';
    var pass = '';
    for (propiedad in configuracion) {
        if (configuracion[propiedad] == true) {
            carfin += caracteres[propiedad] + ' ';
            //console.log(carfin);
        }
    }
    //console.log(carfin);
    /* funcion arreglo */
    carfin = carfin.trim();
    carfin = carfin.split(' ');
    //console.log(carfin);

    for (let i = 0; i < configuracion.caracteres; i++) {
        pass = pass + carfin[Math.floor(Math.random() * carfin.length)]
    }
    console.log(pass);
    app.elements.namedItem('input-pass').value = pass;
}

function copiarpass() {
    app.elements.namedItem('input-pass').select();
    document.execCommand('copy');
    document.getElementById('alerta-copiado').classList.add('active');

    setTimeout(function () {
    document.getElementById('alerta-copiado').classList.remove('active');
    }, 2000);
}
/* ++++++++++++++++++++++++++++++++++++++++++++++ */
}())
