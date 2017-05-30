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

// $(function(){
    
//     $('#formulario').on('submit', function(e) {
//         e.preventDefault()
//         var valor = $('#campo').val()
//         var stgr = valor.length
//         if(stgr == 0){
//             console.log('El campo no puede estar vacío')
//             $('#pepe').html('El campo no puede estar vacío')
//         }else{
//             console.log('Bienvenido: ', valor)
//              $('#pepe').html('Bienvenido: ' + valor)
//         }
//     })
// })
 

// push agrega elementos al array
// var arr = []
// $(function(){
//     $('#formulario').on('submit', function(e){
//         e.preventDefault()
//         var el = $('#campo').val()
//         arr.push(el)
//         console.log(arr)
//     })
// })

// var arr = []
// $(function(){
//     $('#formulario').on('submit', function(e){
//         e.preventDefault()
//         var el = $('#campo').val()
//         arr.push(el)
//         var plantilla = ''
//         for(var i = 0; i < arr.length; i++){
//             plantilla = plantilla + ' <li>' + arr[i] + '</li>'
//         }
//         $('#contenido').html(plantilla)
//     })
// })

//agrega un elemento de lista al final append
// $(function(){
//     $('#formulario').on('submit', function(e){
//         e.preventDefault()
//         var el = $('#campo').val()
//         $('#contenido').append('<li>' + el + '</li>')
//     })
// })

// agrega un elemento de lista el principio prepend
// $(f


// $(function(){
//     $('#formulario').on('submit', function(e){
//         e.preventDefault()
//         var el = $('#campo').val()
//         $('#contenido').prepend('<li>' + el + '</li>')
//     })
// })

/**
 * Cuando el formulario se envíe, 
 * ir a buscar los valores de ambos campos
 * El primero será un titulo
 * el segundo sera el contenido o descripcion
 * El titulo tiene que ser de al menos 5 caracteres de longitud
 * de lo contrario mostrar un error "Titulo muy corto"
 * El contenido debe ser de al menos 5 caracteres de longitud
 * de lo contrario mostrar un error "Contenido muy corto"
 * Si ambos son mayores de 5 caracteres de longitud
 * agregarlo al cuerpo del HTML con la siguiente estructura
 * <div>
 * <h1>Titulo</h1>
 * <p>contenido</p>
 * </div>
 * 
 */

$(function(){
    
    $('#formulario').on('submit', function(e) {
        e.preventDefault()
        var til = $('#campo').val()
        var cue = $('#campo2').val()
        var con = $('#contenido').val()
        $('#pepe').html('')
        if( til.length > 4 && cue.length > 4){
            $('#pepe').html('El Titulo y contenido OK ')
            $('#contenido').html('<div><h1>' + til + '</h1><p>' + cue + '</p></div>')
            

        }else if(til.length <5){
            $('#pepe').html('El título es muy corto')
            if(cue.length <5){
            $('#pepe').html('El titulo y el contenido es muy pequeño')
            }
        }else{
            $('#pepe').html('El contenido es muy pequeño')
        }
    })
})