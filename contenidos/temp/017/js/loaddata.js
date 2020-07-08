let loadUsers = () => {

  fetch("data/usuarios.xml")
    .then(function(resultado){
      return resultado.text()
    })
    .then(function(str) {

      let parser = new DOMParser()
      let xml = parser.parseFromString(str, "text/xml");

      let datos = xml.getElementsByTagName('datos');
      let caption = document.createElement('caption')
      
      /* Pasamos los datos del xml al html */

      let table = document.createElement("table");
      table.setAttribute('class', 'table')

      let captionText = xml.getElementsByTagName('caption')[0].textContent;
      let captionNodeText = document.createTextNode(captionText)
      caption.appendChild(captionNodeText)

      table.appendChild(caption)

      for(let dato of datos) {

         let tr = document.createElement("tr");
         let th = document.createElement("th");
         let td = document.createElement("td");

         let tipoText = dato.getElementsByTagName("tipo")[0].textContent;
         let cantidadText = dato.getElementsByTagName("cantidad")[0].textContent;
         
         let tipo = document.createTextNode(tipoText);
         let cantidad = document.createTextNode(cantidadText)

         th.appendChild(tipo)
         td.appendChild(cantidad)

         tr.appendChild(th);
         tr.appendChild(td)

         table.appendChild(tr)
      }

      //Agregamos la tabla al nodo en el html
      document.getElementById('usuarios').appendChild(table)

    })
    .catch(function(error) {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
    });
   
}

let loadFacultades = () => {
  fetch("data/facultad.xml")
    .then(function(resultado){
      return resultado.text()
    })
    .then(function(str) {

      let parser = new DOMParser()
      let xml = parser.parseFromString(str, "text/xml");

      let facultades = xml.getElementsByTagName('facultad');
      let caption = document.createElement('caption')
      
      /* Pasamos los datos del xml al html */

      let table = document.createElement("table");
      table.setAttribute('class', 'table')

      let captionText = xml.getElementsByTagName('caption')[0].textContent;
      let captionNodeText = document.createTextNode(captionText)
      caption.appendChild(captionNodeText)

      table.appendChild(caption)

      let tr = document.createElement("tr");
      let meses = xml.getElementsByTagName("mes");

      tr.appendChild(document.createElement("th"))

      for(let mes of meses) {
        let th = document.createElement("th");
        let mesText = document.createTextNode(mes.textContent)
        th.appendChild(mesText)
        tr.appendChild(th)
      }

      table.appendChild(tr)


      for(let facultad of facultades) {

         let tr = document.createElement("tr");
         let th = document.createElement("th");
         
         let tipoText = facultad.getElementsByTagName("nombre")[0].textContent;
         let tipo = document.createTextNode(tipoText);
         th.appendChild(tipo) 
          tr.appendChild(th);

         let cantidades = facultad.getElementsByTagName("cantidad");

         for(let cantidad of cantidades) {
           let td = document.createElement("td");
           let cantidadText = document.createTextNode(cantidad.textContent)
           td.appendChild(cantidadText)
           tr.appendChild(td)
         }

         table.appendChild(tr)
      }

      //Agregamos la tabla al nodo en el html
      document.getElementById('facultad').appendChild(table)

    })
    .catch(function(error) {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
    });
}

//En cuanto el documento esté completamente cargado se ejecutará la función loadUsers
document.addEventListener('DOMContentLoaded', function() {
  loadUsers()
  loadFacultades();
})