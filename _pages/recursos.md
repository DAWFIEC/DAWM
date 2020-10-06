---
title: "DAWM - Recursos"
layout: gridlay
excerpt: "Recursos"
sitemap: false
permalink: /recursos
---

# Recursos

## Diapositivas
 - [Unidad 1](contenidos/diapositivas/Unidad1.rar)
 - [Unidad 2](contenidos/diapositivas/Unidad2.rar)
 - [Unidad 3](contenidos/diapositivas/Unidad3.rar)
 - [Unidad 4](contenidos/diapositivas/Unidad4.rar)
 - [Unidad 5](contenidos/diapositivas/Unidad5.rar)
 
## Cheatsheets

- [HTML5](contenidos/cheatsheets/HTML5-cheat-sheet.pdf)
- [CSS3](contenidos/cheatsheets/css3-cheat-sheet.pdf)
- [JavaScript](contenidos/cheatsheets/javascript_cheat_sheet.pdf)

## Sitios web

- [HTML Standard.](https://html.spec.whatwg.org/multipage/) (2020). Html.spec.whatwg.org. Retrieved 28 May 2020, from https://html.spec.whatwg.org/multipage/
- [HTML Examples.](https://www.w3schools.com/html/html_examples.asp) (2020). W3schools.com. Retrieved 28 May 2020, from https://www.w3schools.com/html/html_examples.asp
- [Tutorial, T.](https://javascript.info/) (2020). The Modern JavaScript Tutorial. Javascript.info. Retrieved 25 May 2020, from https://javascript.info/
- [Lorem Ipsum - All the facts - Lipsum generator.](https://es.lipsum.com/) (2020). Es.lipsum.com. Retrieved 27 May 2020, from https://es.lipsum.com/
- [Why You Should Choose HTML5 article Over section — Smashing Magazine.](https://www.smashingmagazine.com/2020/01/html5-article-section/) (2020). Smashing Magazine. Retrieved 27 May 2020, from https://www.smashingmagazine.com/2020/01/html5-article-section/
- [Glosario](https://developer.mozilla.org/es/docs/Glossary) (2020). Documentación web de MDN. Retrieved 29 May 2020, from https://developer.mozilla.org/es/docs/Glossary
- [Mockaroo - Random Data Generator and API Mocking Tool | JSON / CSV / SQL / Excel. (2020)](https://www.mockaroo.com/). Retrieved 13 June 2020, from https://www.mockaroo.com/
- [generatedata.com. (2020)](http://generatedata.com/). Retrieved 13 June 2020, from http://generatedata.com/
- [DOM Standard](https://dom.spec.whatwg.org/) (2020). Retrieved 29 June 2020, from https://dom.spec.whatwg.org/

## Módulos

 - [Admin Bro](https://github.com/SoftwareBrothers/admin-bro) Interfaz de administración para Express
 - [RestAngular](https://github.com/mgonto/restangular) Código mínimo para clientes de REST API
 - [CanvaJS](https://canvasjs.com/) Herramienta para crear visualizaciones sencillas
 - [JSONWebToken](https://www.npmjs.com/package/jsonwebtoken) Tokens de autenticación bajo JSON

## Libro gratuitos

- [Programming Notes for Professionals books](https://goalkicker.com/). Free Programming Books; HTML5, CSS3, JavaScript, PHP, Python.... (2020). Goalkicker.com. Retrieved 13 May 2020, from https://goalkicker.com/

## Repositorios
   - [Jonathan Quintana](https://github.com/jquintanas?tab=repositories)
      - API REST
        - [Repositorio](https://github.com/jquintanas/api-rest)
        - [Tutorial](contenidos/tutoriales/REST.pdf)
      - GraphQL
        - [Repositorio](https://github.com/jquintanas/graphql-DAW)
        - [Tutorial](contenidos/tutoriales/GraphQL.pdf)
      - Web Sockets
        - [Repositorio](https://github.com/jquintanas/socketio)
      - Formularios
        - [Repositorio](https://github.com/jquintanas/expressForm)
   - [Geancarlo Murillo](https://github.com/gcmurillo)
     - Sass 
       - [Repositorio](https://github.com/gcmurillo/sass)
       - [Tutorial](https://github.com/gcmurillo/sass)
     - Ajax
       - [Repositorio](https://github.com/gcmurillo/ajax_tutorial)
       - [Tutorial](https://github.com/gcmurillo/ajax_tutorial)
   - [Emilio Morán](https://github.com/emiliomoran)
      - Django
        - [Repositorio](https://github.com/emiliomoran/Django_DAW_2S_2019)
        - [Tutorial](contenidos/tutoriales/Django.pdf)
   - [DAWM](https://github.com/DAWFIEC/DAWM/)
      - Cliente / Servidor
        - [NodeJS](https://github.com/DAWFIEC/DAWM/blob/gh-pages/contenidos/tutoriales/s%26c.rar)

## Colores
  - [Create a palette - Coolors.](https://coolors.co/37123c-71677c-a99f96-dda77b-945d5e) (2020). Coolors.co. Retrieved 16 May 2020, from https://coolors.co/37123c-71677c-a99f96-dda77b-945d5e
 
## Íconos
  - ['Black White Social Media' by youtube.com/AlfredoCreates.](https://www.iconfinder.com/iconsets/black-white-social-media) (2018). Iconfinder. Retrieved 3 October 2018, from https://www.iconfinder.com/iconsets/black-white-social-media
  - [Streamline 3.0.](https://app.streamlineicons.com/streamline-regular/interface-essential) (2019). App.streamlineicons.com. Retrieved 7 June 2019, from https://app.streamlineicons.com/streamline-regular/interface-essential
  - [Material Icons.](https://material.io/resources/icons/?style=baseline) (2020). Material Design. Retrieved 13 May 2020, from https://material.io/resources/icons/?style=baseline

## Fuentes
  - [20 Best Google Web Fonts.](https://www.awwwards.com/20-best-web-fonts-from-google-web-fonts-and-font-face.html) (2018). Awwwards.com. Retrieved 3 October 2018, from https://www.awwwards.com/20-best-web-fonts-from-google-web-fonts-and-font-face.html
  - [DaFont - Descargar fuentes.](https://www.dafont.com/es/) (2020). Dafont.com. Retrieved 16 May 2020, from https://www.dafont.com/es/

## Videos

{% for publi in site.data.publist %}
<div class="row">
 <div class="col-sm-6 clearfix">
  <div class="well">
   <p><pubtit>{{ publi.title }}</pubtit></p>
   <iframe width="auto" height="315" src="{{ publi.link.url }}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   <p><em>{{ publi.authors }}</em></p>
   <p> {{ publi.description }}</p>
 </div>
</div>
{% endfor %}

<p> &nbsp; </p>
