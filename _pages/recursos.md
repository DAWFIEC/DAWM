---
title: "DAWM - Recursos"
layout: gridlay
excerpt: "Recursos"
sitemap: false
permalink: /recursos
---

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
   - [Emilio Morán](https://github.com/emiliomoran)
      - Django
        - [Repositorio](https://github.com/emiliomoran/Django_DAW_2S_2019)
        - [Tutorial](contenidos/tutoriales/Django.pdf)

## Colores
  - Create a palette - Coolors. (2020). Coolors.co. Retrieved 16 May 2020, from https://coolors.co/37123c-71677c-a99f96-dda77b-945d5e
 
## Íconos
  - 'Black White Social Media' by youtube.com/AlfredoCreates. (2018). Iconfinder. Retrieved 3 October 2018, from https://www.iconfinder.com/iconsets/black-white-social-media
  - Streamline 3.0. (2019). App.streamlineicons.com. Retrieved 7 June 2019, from https://app.streamlineicons.com/streamline-regular/interface-essential
  - Material Icons. (2020). Material Design. Retrieved 13 May 2020, from https://material.io/resources/icons/?style=baseline

## Fuentes
  - 20 Best Google Web Fonts. (2018). Awwwards.com. Retrieved 3 October 2018, from https://www.awwwards.com/20-best-web-fonts-from-google-web-fonts-and-font-face.html
  - DaFont - Descargar fuentes. (2020). Dafont.com. Retrieved 16 May 2020, from https://www.dafont.com/es/

## Tutoriales

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
