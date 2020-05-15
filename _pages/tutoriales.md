---
title: "DAWM - Tutoriales"
layout: gridlay
excerpt: "Tutoriales"
sitemap: false
permalink: /tutoriales
---


# Tutoriales

{% for publi in site.data.publist %}
<div class="row">
 <div class="col-sm-6 clearfix">
  <div class="well">
   <pubtit>{{ publi.title }}</pubtit>
   <iframe width="560" height="315" src="{{ publi.link.url }}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   <p><em>{{ publi.authors }}</em></p>
   <p> {{ publi.description }}</p>
 </div>
</div>
{% endfor %}

<p> &nbsp; </p>
