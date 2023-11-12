from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.request import Request
from rest_framework.response import Response
from django.core import serializers as serializerss
from .models import *
import pandas as pd
import json
from .serializer import *
import os,sys
from rest_framework import status
p = os.path.abspath('..')
sys.path.insert(1,p)
from ai.benefit_job_model import *
from ai.apply_model import *
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
            #print(type(locs))
            vallist = []
            keyes= locs.keys()
            for key0,value0 in locs.items():
                vallist.append(key0)
            for key in keyes:
                val1 = locs[key]
                keyes2 = val1.keys()
                #print(keyes2)
                for key2 in keyes2:
                    val2 = val1[key2]
                    keyes3 = val2.keys()
                    for key3 in keyes3:
                        vallist.append(val2[key3])
            hire_all = Hire.objects.all().count()
            hire = Hire(str(hire_all+1),vallist[0],vallist[1],vallist[2],vallist[3],vallist[4],vallist[5],vallist[6],vallist[7],vallist[8],vallist[9],vallist[10],vallist[11],vallist[12],vallist[13],vallist[14],vallist[15],vallist[16],vallist[17],vallist[18],vallist[19],vallist[20],vallist[21])
            hire.save()
        return Response({"status":"success"})
            
class saveBenefit(APIView):
    def get(self,request):
        with open("./fatherapp/benefits.csv",'r') as f:
            df = pd.read_csv(f)
        # print(len(df))
        for lens in range(len(df)):
            benefits = df.loc[lens]
            cur_wel = Benefit(type=benefits['type'],service=benefits['service'],content=benefits['content'],target=benefits['target'],how=benefits['how'])
            cur_wel.save()
            #print(cur_wel)
        return Response({"status":"success"})
        

class BenefitView(APIView):
    #first view
    def get(self,request):
        benefit_all = Benefit.objects.all()
        benefit_serial = BenefitSerializer(benefit_all,many=True)
        return Response(benefit_serial.data)
    def post(self,request:Request): #####혜택 즐겨찾기 기능"####################3
        user_id = request.data.get('user_id')
        benefit_id = request.data.get('benefit_id')
        benefit_id.benefits.add(User.objects.get(user_id=user_id))
        return Response(status=status.HTTP_200_OK)
        
        
class hireView(APIView):
    def get(self,request):
        hire_all = Hire.objects.all()
        hire_serial = HireSerializer(hire_all,many = True)
        indented_list=[]
        
        for hires in hire_serial.data:
            indented_json = {}
            indented_json['id'] = hires['id']
            indented_json['hire_title'] = hires['hire_title']
            hireq = {}
            hireq['경력사항'] = hires['qualified_apply']
            hireq['학력사항'] = hires['qualified_apply']
            hireq['장애인채용'] = hires['qualified_apply']
            hireq['우대사항'] = hires['qualified_apply']
            indented_json['지원자격'] = hireq
            #print(indented_json)
            hire = {}
            hire['고용형태'] = hires['hire_type'] 
            hire['계약기간'] = hires['hire_contract']             
            hire['급여조건'] = hires['hire_pay']  
            hire['근무지역'] = hires['hire_region']  
            hire['직급'] = hires['hire_rank']  
            hire['직책'] = hires['hire_role']  
            indented_json['근무조건'] = hire 
            #print(indented_json)
            submit = {}
            submit['접수기간']  = hires['submit_period']
            submit['접수방법']  = hires['submit_type']
            submit['접수 이메일']  = hires['submit_address']
            submit['제출 서류']  = hires['submit_portpolio']
            indented_json['제출'] = submit
            #print(indented_json) 
            work={}
            work['근무지역'] = hires['work_region']
            work['근무요일'] = hires['work_day']
            work['근무시간'] = hires['work_period']
            work['복리후생'] = hires['work_benefits']
            work['장애인편의시설'] = hires['work_facility']
            indented_json['근무환경'] = work 
            #print(indented_json)
            officer = {}
            officer['담당자'] = hires['officer_name']
            officer['전화번호'] = hires['officer_tel']
            officer['이메일'] = hires['officer_email']
            indented_json['담당자'] = officer
            #print(indented_json)
            indented_list.append(indented_json)
        return Response(indented_list)
class locationView(APIView):
    def get(self,request):
        location_all = Location.objects.all()
        loc_serial = LocationSerializer(location_all,many=True)
        return Response(loc_serial.data)

class chatView(APIView):
    def get(self,request):
        return Response({"get":"success"})
    def post(self,request:Request):
        post_content = request.data.get('question')
        # #print(post_content)
        answer = benefit_job_model(post_content)
        # #print(answer)
        answer = answer.replace('<distinction: ','')
        answer = answer.replace(', id: ','|')
        answer = answer.replace('>','')
        splited = answer.split('|')
        ans_json = {}
        if len(splited) == 1:
            ans_json['answer'] = [splited[0]]
            return Response(ans_json)
        #print(splited)
        modelsth = models.Model
        if splited[0] == '채용, 구인구직, 일' :
            modelsth = Hire
        elif splited[0] == '혜택, 복지, 지원금' :
            modelsth = Benefit
        
        idlist = splited[1].replace('[','').replace(']','').replace(', ','|')
        splited1 = idlist.split('|')
        #print(splited1)
        
        jsonlist = []
        for split_id in splited1:
            getfromdb = modelsth.objects.filter(id = split_id)
            filter_first = getfromdb.first()
            get_json = {}
            if modelsth == Hire:
                get_json["type"] = "hire"
                serialed = HireSerializer(filter_first).data
            elif modelsth == Benefit:
                get_json["type"] = "welfare"
                serialed = BenefitSerializer(filter_first).data
            get_json["info"] = serialed
            jsonlist.append(get_json)
        ans_json['answer'] = jsonlist
        
        return Response(ans_json)
class resumeView(APIView):
    def get(self,request:Request):
        return Response({"status":"success"})
    def post(self,request:Request):
        post_resume = request.data.get('question')
        #print(post_resume)
        title = request.data.get('title')
        #print(title)
        answer = apply_model(title,post_resume)
        ans_json = {}
        ans_json['answer'] = answer
        return Response(ans_json)
class resumesaveView(APIView):
    def post(self,request:Request):
        ans_json = {}
        post_resume = request.data.get('resume')
        post_workspace = request.data.get('workspace')
        post_periods = request.data.get('periods')
        post_user_id = request.data.get('user_id')
        hire_id = request.data.get('hire_id')
        ans_json['resume'] = post_resume
        ans_json['workspace'] = post_workspace
        ans_json['periods'] = post_periods
        ans_json['user_id'] = post_user_id
        resume_count = Resume.objects.all().count()
        user = User.objects.get(user_id = post_user_id)
        #이력서 저장
        resume = Resume(user_id=user,resume_num=resume_count,workspace=post_workspace,months_period=post_periods,stmt =post_resume)
        resume.save()
        #지원한 회사 저장
        hire = Hire.objects.get(id =hire_id)
        user.hires.add(hire)
        user.save()
        hire.save()
        return Response(status=status.HTTP_200_OK)
        

class userView(APIView):
    def post(self,request:Request):
        post_id = request.data.get('user_id')
        cur_user = User.objects.get(user_id = post_id)
        ans_json = {}
        liked = cur_user.hires.all()
        benefits = cur_user.benefits.all()
        hirelist = []
        for hire in liked:
            hire_s = HireSerializer(hire).data
            hirelist.append(hire_s)
        ans_json['hire'] = hirelist
        benelist = []
        for bene in benefits:
            bene_s = BenefitSerializer(bene).data
            benelist.append(bene_s)
        ans_json['bene'] = benelist
        #print(ans_json)
        return Response(ans_json)
        
        
class benefitaddView(APIView):
    def post(self,request:Request):
        post_id = request.data.get('user_id')
        cur_user = User.objects.get(user_id = post_id)
        bene_id = request.data.get('benefit_id')
        cur_benefit = Benefit.objects.get(id=bene_id)
        cur_user.benefits.add(cur_benefit)
        cur_user.save()
        cur_benefit.save()
        return Response(status=status.HTTP_200_OK)