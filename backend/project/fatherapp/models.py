from django.db import models

# Create your models here.

class User(models.Model):
    name = models.CharField(max_length=20,null=False)
    user_id = models.CharField(max_length=20,null=False,primary_key=True)
    
    def __str__(self) -> str:
        return self.user_id

class Characteristics(models.Model):
    user_id = models.ForeignKey(User,on_delete=models.CASCADE)
    num = models.IntegerField(null=False,default=-1)
    type = models.CharField(max_length=20,null=False)
    def __str__(self) -> str:
        return  "{}_{}".format(self.user_id,str(self.num))

class Qualified(models.Model):
    user_id = models.ForeignKey(User,on_delete=models.CASCADE)
    num = models.IntegerField(null=False,default=-1)
    type = models.CharField(max_length=20,null=False)
    def __str__(self) -> str:
        return "{}_{}".format(self.user_id,str(self.num))
class Resume(models.Model):
    user_id = models.ForeignKey(User,on_delete=models.CASCADE,null=False)
    resume_num = models.IntegerField(null=False,default=-1)
    workspace = models.CharField(max_length=30)
    months_period = models.IntegerField()
    def __str__(self) -> str:
        return "{}_{}".format(self.user_id,str(self.resume_num))
    
class Statement(models.Model):
    user_id = models.OneToOneField(User,on_delete=models.CASCADE,null=False,)
    statement_num = models.IntegerField(null=False,default=-1)
    title = models.CharField(max_length=30) 
    content = models.TextField(max_length=500)
    def __str__(self) -> str:
        return "{}_{}".format(self.user_id,str(self.statement_num))

class Location(models.Model):
    name = models.CharField(max_length=30,default='default')
    tel = models.CharField(max_length=15)
    address  = models.CharField(max_length=40)
    lon = models.FloatField()
    lat = models.FloatField()
    
    def __str__(self) -> str:
        return self.name
class Welfare(models.Model):
    # 'type','service','content','target','how'
    type = models.CharField(max_length=30)
    service = models.CharField(max_length=200)
    content = models.CharField(max_length=200)
    target = models.CharField(max_length=50)
    how = models.CharField(max_length=200)
    
    def __str__(self) -> str:
        return self.service

class Hire(models.Model):
    user_id = models.ManyToManyField(User,null=True)
    hire_id = models.CharField(max_length=20,default='')
    hire_title = models.CharField(max_length=50,default="")
    qualified_apply = models.CharField(max_length=20)
    qualified_education = models.CharField(max_length=20)
    qualified_disabled = models.CharField(max_length=25)
    qualified_advantage = models.CharField(max_length=25)
    hire_type = models.CharField(max_length=25)
    hire_contract = models.CharField(max_length=25,default="")
    hire_pay= models.CharField(max_length=25)
    hire_region =  models.CharField(max_length=25)
    hire_rank = models.CharField(max_length=25,default="")
    hire_role = models.CharField(max_length=25,default="")
    submit_period = models.CharField(max_length=50,default="")
    submit_type= models.CharField(max_length=25)
    submit_address = models.CharField(max_length=25)
    submit_portpolio = models.CharField(max_length=25,default="")
    work_region =  models.CharField(max_length=25)
    work_day =  models.CharField(max_length=25)
    work_period= models.CharField(max_length=25)
    work_benefits = models.CharField(max_length=25,default="")
    work_facility = models.CharField(max_length=25,default="")
    officer_name = models.CharField(max_length=25)
    officer_tel =  models.CharField(max_length=25)
    
    def __str__(self) -> str:
        return "{}_{}".format(self.user_id,self.hire_id)

