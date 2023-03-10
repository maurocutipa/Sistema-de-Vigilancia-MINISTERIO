from django.db import models
from Persona.models import Persona
from Servicio.models import Servicio

class Procedimiento (models.Model):
    fk_servicio = models.ForeignKey(Servicio,on_delete=models.CASCADE)
    descripcion = models.TextField(blank=False,null=False)
    hora = models.TimeField()
    latitud = models.DecimalField(null=False,decimal_places=10,max_digits=13)
    longitud = models.DecimalField(null=False,decimal_places=10,max_digits=13)
    cant_protagonistas = models.IntegerField()
    cant_infracciones = models.IntegerField()
    cant_arrestados = models.IntegerField()
    
class ProcedimientoPersona (models.Model):
    fk_procedimiento = models.ForeignKey('Procedimiento',on_delete=models.CASCADE)
    fk_persona = models.ForeignKey(Persona,on_delete=models.CASCADE)
    detenido = models.BooleanField()
    
    

class TipoProcedimiento (models.Model):
    tipo_procedimiento = models.CharField(null=False,max_length=50)
    
class DetalleProcedimiento (models.Model):
    fk_procedimiento = models.ForeignKey('Procedimiento',on_delete=models.CASCADE)
    fk_tipo_procedimiento = models.ForeignKey(TipoProcedimiento,on_delete=models.CASCADE)
    detalle_articulo = models.TextField(null=False)
    detalle_inciso = models.TextField(null=False)
    detalle_tipo_procedimiento = models.TextField(null=False)
    detalle_ley = models.TextField(null=False)
