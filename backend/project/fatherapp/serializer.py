from rest_framework import serializers
from .models import *
class UserSerializer(serializers.ModelSerializer):
    class Meta :
        model = User
        fields = '__all__'
        
class LocationSerializer(serializers.ModelSerializer):
    class Meta : 
        model = Location
        fields = '__all__'
        
class WelfareSerializer(serializers.ModelSerializer):
    class Meta :
        model = Welfare
        fields = '__all__'
        
class HireSerializer(serializers.ModelSerializer):
    class Meta :
        model = Hire
        fields = '__all__'