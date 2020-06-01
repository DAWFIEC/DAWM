---
title: "DAWM - Proyectos"
layout: piclay
excerpt: "Proyectos"
permalink: /proyectos
---

# Proyecto

El proyecto se utiliza como experiencia práctica para diseñar e implementar aplicaciones web y móviles cumpliendo con los estándares actuales y las buenas prácticas de programación que faciliten su mantenibilidad, escalabilidad y adaptabilidad. 

Para esto, el proyecto está dividido en dos capas: presentación (frontend) y acceso de datos (backend). En la capa de presentación se utilizan las tecnologías HTML, CSS y JS; además, se utiliza un marco de trabajo (framework) del lado del cliente y requerimientos web asincrónicos entre el cliente y el servidor. En la capa de acceso de datos se utiliza un framework del lado del servidor para atender los requerimientos del cliente mediante REST API, acceso a base de datos relacionales y no relacionales, seguridad web básica y el proceso de despliegue de la aplicación.

## Proyecto Parcial

- [ ] [Planificación](contenidos/documentos/Planificación.docx)

### Presentación
(Click derecho y *'Abrir imagen en una nueva pestaña'* para ver la imagen más grande.)
{% assign number_printed = 0 %}
{% for pic in site.data.proyectos.yml %}

{% assign even_odd = number_printed | modulo: 4 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-3 clearfix">
<img src="{{ site.url }}{{ site.baseurl }}/images/picproyectos/{{ pic.image }}" class="img-responsive" width="95%" style="float: left" alt="{{pic.title}}" />
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd > 2 %}
</div>
{% endif %}


{% endfor %}

{% assign even_odd = number_printed | modulo: 4 %}
{% if even_odd == 1 %}
</div>
{% endif %}

{% if even_odd == 2 %}
</div>
{% endif %}

{% if even_odd == 3 %}
</div>
{% endif %}

<p> &nbsp; </p>

