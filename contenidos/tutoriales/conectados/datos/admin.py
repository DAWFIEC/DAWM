from django.contrib import admin

from .models import Facultad, Profesor, Estudiante

admin.site.register(Facultad)
admin.site.register(Profesor)
admin.site.register(Estudiante)