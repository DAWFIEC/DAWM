let chatStyle = () => {

    /* Selecciona el nodo con el id "texto-chat" */
  /* con el método document.getElementById( ) */

  let texto = document.getElementById( "texto-chat" );
  
  
  /* Agrega la clase 'textoChat' con el atributo className */

  texto.className =  'textoChat'
  

  /* Selecciona el nodo con el id "chat" */
  /* con el método document.getElementById( ) */

  let contenedor = document.getElementById( "chat" )

  /* 
    Utiliza los métodos setAttribute y getAttribute para agregar la clase "containerChat" a las clases que preexistentes en el nodo  
  */

  //contenedor.setAttribute('class', contenedor.getAttribute('class') + " containerChat"  );
  contenedor.className = contenedor.className + " containerChat"
  
}

chatStyle();

// Crear la función tooltipStyle 
// Utiliza el método getElementsByClassName para seleccionar los elementos con la clase 'tooltiptext'
// para agregar la clase 'tooltipStyle'
// A cada nodo, agrega la propiedad visibility con el valor hidden

let tooltipStyle = () => {

  let elementos = document.getElementsByClassName('tooltiptext')

  for (let elemento of elementos)  {
    elemento.setAttribute('class', 
    elemento.getAttribute('class') + ' tooltipStyle')
    elemento.style.visibility = 'hidden' 
  }

}

// Llama a la función tooltipStyle
tooltipStyle();


// tooltipFunctionality

let tooltipFunctionality = () => {
  // Selecciona los elementos con la clase 'tituloseccion' 
  let elementos = document.getElementsByClassName('tituloseccion')

  for (let elemento of elementos)  {

    // Agrega un callback manejador al evento onmouseover
    // Teniendo como referencia el nodo elemento, selecciona el primer elemento con la etiqueta 'div'. 
    // A este elemento hijo, modifica la propiedad visibility con el valor 'visible'

    elemento.onmouseover = () => {
      let child = elemento.getElementsByTagName('div')[0]
      child.style.visibility = 'visible'
    }


    // Agrega un listener al evento mouseout
    // Teniendo como referencia el nodo elemento, selecciona el primer elemento con la etiqueta 'div'. 
    // A este elemento hijo, modifica la propiedad visibility con el valor 'hidden'

    elemento.addEventListener('mouseout' , () => {
      let child = elemento.getElementsByTagName('div')[0]
      child.style.visibility = 'hidden'
    });

  } 
}


// Llamada a la función tooltipFunctionality
tooltipFunctionality();