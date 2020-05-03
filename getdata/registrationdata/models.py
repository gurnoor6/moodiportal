from django.db import models

# Create your models here.
class RegistrationData(models.Model):
	name = models.CharField(max_length=80)
	college = models.CharField(max_length=200)
	city = models.CharField(max_length=50)
	contact = models.CharField(max_length=80)
	email = models.CharField(max_length=80)
	idcard = models.ImageField(upload_to='images/')

	def __str__(self):
		return self.name