from django.db import models


class Facultad(models.Model):
    nombre = models.CharField(max_length=200)

    def __str__(self):
        return self.nombre
    

class Profesor(models.Model):
    facultad = models.ForeignKey(Facultad, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=200)
    fecha_inicio = models.DateTimeField('Fecha de inicio')
    acceso = models.IntegerField(default=0)

    def __str__(self):
        return self.nombre

class Estudiante(models.Model):
    facultad = models.ForeignKey(Facultad, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=200)
    acceso = models.IntegerField(default=0)

    def __str__(self):
        return self.nombre