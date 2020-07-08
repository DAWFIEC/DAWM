let loadPersonal = () => {

  fetch("data/personal.json")
    .then(function(resultado){
      return resultado.json()
    })
    .then(function(arreglo) {
      
      // Toma como referencia la plantilla para mostrar todos los datos del personal. 

      for(let elemento of arreglo) {
        
        let nombre = elemento.nombre
        let keywords = elemento.keywords
        let colega0 = elemento.colegas[0].nombre
        let colega1 = elemento.colegas[1].nombre
        let colega2 = elemento.colegas[2].nombre

        let plantilla = `<div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${nombre}</h5>
            <p class="card-text">${keywords}</p>
            <a href="#" class="card-link">${colega0}</a>
            <a href="#" class="card-link">${colega1}</a>
            <a href="#" class="card-link">${colega2}</a>
          </div>
        </div>`

        document.getElementById('resultados').innerHTML += plantilla
      }

    })
    .catch(function(error) {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
    });
}

let filterResults = () => {

  let buscadorForm = document.getElementById('searchForm');

  buscadorForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let textSearch = document.getElementById('textSearch').value

    // Utiliza el valor en textSearch
    // para filtrar los resultados que se encuentran en el div#resultados
    let h5s = document.getElementsByTagName('h5');

    for(let h5 of h5s) {

      let text = h5.textContent

      if(text.includes(textSearch)) {
        h5.parentNode.parentNode.style.visibility = 'visible'
      } else {
        h5.parentNode.parentNode.style.visibility = 'hidden'
      }


    }
    
  })
   
}

document.addEventListener('DOMContentLoaded', function() {
  loadPersonal();
  filterResults();
})