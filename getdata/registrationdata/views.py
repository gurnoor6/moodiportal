from django.shortcuts import render
from rest_framework import viewsets
from .models import RegistrationData
from .serializers import RegistrationDataSerializer
from django.http import HttpResponse

# Create your views here.

class RegistrationDataView(viewsets.ModelViewSet):
	queryset = RegistrationData.objects.all()
	serializer_class= RegistrationDataSerializer

	def post(self,request,*args,**kwargs):
		name = request.data['name']
		email = request.data['email']
		city = request.data['city']
		contact = request.data['contact']
		college = request.data['college']
		idcard = request.data['idcard']
		RegistrationData.objects.create(name=name,email=email,city=city,contact=contact,college=college,idcard=idcard)
		return HttpResponse({'message':'Registered Successfully'},status=200)
