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
var nom = $('#nombre').html()
var apel = $('#apellido').html()
var edi = $('#edad').html()
var cue = $('#cuerta').html()

$(function(){
    var persona = 'Bienvenido ' + nom + ' ' + apel + ', tienes ' + edi + ' años'
    console.log(cue)
    $('#cuerta').html(persona)
})