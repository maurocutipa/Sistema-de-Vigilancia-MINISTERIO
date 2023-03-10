from django.db import models
from django.contrib.auth.models import AbstractBaseUser,PermissionsMixin,BaseUserManager
from .manager import UsuarioManager       

<<<<<<< HEAD
class Usuario(AbstractBaseUser,PermissionsMixin):
    username = models.CharField('Nombre de Usuario', max_length=100, unique=True)
    email = models.EmailField('Correo Electronico', max_length=254, unique=True)
    nombres = models.CharField("Nombres", max_length=200,blank=True,null=True)
    apellidos = models.CharField("Apellidos", max_length=200,blank=True,null=True)
    # rol = models.CharField("Rol", max_length=50, null=True, blank=True)
    usuario_activo = models.BooleanField(default=True)
    
    
    objects = UsuarioManager()
    
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email',]
    
    def __str__(self):
        return f'{self.nombres} {self.apellidos}'
    
    def has_perm(self,perm,obj = None):
        return True
    
    def has_module_perms(self,app_label):
        return True
    
    @property
    def is_staff(self):
        return self.is_superuser
=======

class User(AbstractUser):

    email = models.EmailField(unique=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []


class Empleado(models.Model):
    User = models.OneToOneField(
        User, on_delete=models.CASCADE, related_name="empleados"
    )
    nivel_permiso = models.CharField(
        "nivel permiso", max_length=50, default="operador")

    class Meta:
        verbose_name_plural = "Empleados"
        permissions = (
            # Super Admin
            ("administrador", "Administrador"),
            # operarios empleados:
            ("operador", "Operador"),
            # general
            ("general", "General"),
        )
>>>>>>> Feature
