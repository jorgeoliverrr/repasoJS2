//cciclo for
//for(var i; i<10; i++){
    //codigo acá
//}

//var users = ['Juan', 'Felipe', 'Rodrigo', 'Richard', 'Sebastian']
//cciclo while
//var  i = 0
//while (i < users.length) {
    //codigo amigo aquí
  //  console.log(users[i])
  //  i++
//}

// JQUERY
// JQuery signo $() identifica la llamada a JQuery
// $(function()){
// buscar etiquta por ID se llama con el elemento #  
    // asigna a la variable parrafo el contenido de la etiqueta html p (lorem ipsu...)
    // var parrafo = $('#p').html()
    // console.log(parrafo)
    // remplaza contenido de la etiqueta html p a 'Hola mundo'
    // $('#p').html('Hola Mundo')
// }

/**
 * Crear 3 etiquetas HTML, que deben contener: 
 * Nombre
 * Apellido
 * Edad
 * Imprimir en una cuarta etiqueta:
 * Bienvenido {nombre} {apellido}, tienes {edad} años
 * 
 */

// var nom = $('#nombre').html()
// var apel = $('#apellido').html()
// var edi = $('#edad').html()
// var cue = $('#cuerta').html()

// $(function(){
//     var persona = 'Bienvenido ' + nom + ' ' + apel + ', tienes ' + edi + ' años'
//     console.log(cue)
//     $('#cuerta').html(persona)
// })

// $(function(){
//     //se ejecuta la funcion una vez que se carguen todos los elementos del dom, se va a buscar el formulario, cuando se envíe el formulario se va a buscar el input
//     // la letra 'e' hace referencia a un evento (segun nosotros)
//     $('#formulario').on('submit', function(e) {
//         // preventDefault va a detener la ejecucion inherente al submit
//         e.preventDefault()
//         var valor = $('#campo').val()
//         console.log(valor)
//     })

// })

/**
 *  Obtener un valor de un campo, pero si el contenido de este es vacío,
 *  imprimir en una etiqueta html:
 *  'el campo no puede estar vacio'
 *  En caso de tener contenido, imprimir en la etiqueta:
 *  'bienvenido {campo}'
 * 
 */

$(function(){
    
    $('#formulario').on('submit', function(e) {
        e.preventDefault()
        var valor = $('#campo').val()
        var pepe = $('#pepe').val()
        var stgr = valor.length
        if(stgr == 0){
            console.log('El campo no puede estar vacío')
            $('#pepe').html(pepe + 'El campo no puede estar vacío')
        }else{
            console.log('Bienvenido: ', valor)
             $('#pepe').html(pepe + 'Bienvenido: ' + valor)
        }
    })

})
