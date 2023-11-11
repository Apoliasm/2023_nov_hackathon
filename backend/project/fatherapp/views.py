from django.shortcuts import render
from rest_framework import serializers
from rest_framework.views import APIView
from rest_framework import request
from rest_framework.response import Response
from .models import Location,Hire,Welfare
import pandas as pd
import json
# Create your views here.

class basicview(APIView):
    def get(self,request):
        return Response({})
    
    
class locationaddview(APIView):
    def get(self,request):
        locations = Location.objects.all()
        if locations.count() == 0:
            with open('./fatherapp/facility.csv','r') as f:
                df = pd.read_csv(f)
            for idx in range(len(df)):
                cur = df.loc[idx]
                cur_location = Location(name=cur.get('name'),tel = cur.get('tel'),address=cur.get('address'),lon=cur.get('lon'),lat=cur.get('lat'))
                cur_location.save()
            return Response({"return":"success"})
                
        else:
            return Response({})
        
class locationView(APIView):
    def get(self,request):
        tofront = []
        locations = Location.objects.all()
        for location in range(1,locations.count()+1):
            loc_info = {}
            cur_location = locations.get(id = location)
            loc_info['name'] = cur_location.name
            loc_info['tel'] = cur_location.tel
            loc_info['address'] = cur_location.address
            loc_info['lon'] = cur_location.lon
            loc_info['lat'] = cur_location.lat
            tofront.append(loc_info)
        return Response(tofront)

class saveHireView(APIView):
    def get(self,request):
        with open("./fatherapp/hire_json.json","r",encoding='UTF-8') as f:
            locdata = json.loads(f.read())
        
        for locs in locdata:
            print(type(locs))
            vallist = []
            keyes= locs.keys()
            for key0,value0 in locs.items():
                vallist.append(key0)
            for key in keyes:
                val1 = locs[key]
                keyes2 = val1.keys()
                print(keyes2)
                for key2 in keyes2:
                    val2 = val1[key2]
                    keyes3 = val2.keys()
                    for key3 in keyes3:
                        vallist.append(val2[key3])
            hire_all = Hire.objects.all().count()
            hire = Hire(str(hire_all+1),vallist[0],vallist[1],vallist[2],vallist[3],vallist[4],vallist[5],vallist[6],vallist[7],vallist[8],vallist[9],vallist[10],vallist[0],vallist[11],vallist[12],vallist[13],vallist[14],vallist[15],vallist[16],vallist[17],vallist[18],vallist[19],vallist[20],vallist[21])
            hire.save()
        return Response({"status":"success"})
            
class saveWelfare(APIView):
    def get(self,request):
        with open("./fatherapp/welfares.csv",'r') as f:
            df = pd.read_csv(f)
        for lens in range(len(df)):
            welfares = df.loc[lens]
            cur_wel = Welfare(type=welfares['type'],service=welfares['service'],content=welfares['content'],target=welfares['target'],how=welfares['how'])
            cur_wel.save()
        return Response({"status":"success"})
        
                
        