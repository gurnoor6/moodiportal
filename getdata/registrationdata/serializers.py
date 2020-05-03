from rest_framework import serializers
from .models import RegistrationData



class RegistrationDataSerializer(serializers.ModelSerializer):

	class Meta:
		model=RegistrationData
		fields=('id','name','email','contact','college','city','idcard','competitionname')