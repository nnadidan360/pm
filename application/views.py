# -*- encoding: utf-8 -*-

from django.contrib.auth.decorators import login_required
from django.shortcuts import render, get_object_or_404, redirect
from django.template import loader
from django.http import HttpResponse
from django import template
import requests
# from django.views.generic import FormView, UpdateView
from .forms import profileEditForm, creditEditForm, DebitEditForm
from .models import profile
# , creditInfo
# import requests
from requests import Request, Session
from requests.exceptions import ConnectionError, Timeout, TooManyRedirects
import json


from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.forms.utils import ErrorList
from .forms import LoginForm, SignUpForm




def login_view(request):
    form = LoginForm(request.POST or None)

    msg = None

    if request.method == "POST":

        if form.is_valid():
            username = form.cleaned_data.get("username")
            password = form.cleaned_data.get("password")
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect("/dashboard")
            else:    
                msg = 'Invalid credentials'    
        else:
            msg = 'Error validating the form'    

    return render(request, "accounts/login.html", {"form": form, "msg" : msg})


def register_user(request):

    msg     = None
    success = False

    if request.method == "POST":
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get("username")
            raw_password = form.cleaned_data.get("password1")
            user = authenticate(username=username, password=raw_password)
            profile.objects.create(user=user)
            

            msg     = 'User created - please login.'
            success = True
            
            return redirect("/login/")

        else:
            msg = 'Form is not valid'    
    else:
        form = SignUpForm()

    return render(request, "accounts/register.html", {"form": form, "msg" : msg, "success" : success })


	


# @login_required(login_url="/login/")
def index(request):
    return render(request, "main.html")

def pricing(request):
    return render(request, "Pricing.html")


def about(request):
    return render(request, "About.html")


def affiliate(request):
    return render(request, "Affiliate.html")

def farm(request):
    return render(request, "MinningFarm.html")




@login_required(login_url="/login/")
def dashboard(request):
    return render(request, "index.html")



# def settings(request):
#     form = profile()
#     if request.method == 'POST':
#         form = profile(request.POST)
#         if form.is_valid():
#             form.cleaned_data['phone_no']
#             form.cleaned_data['dob']
#             form.save()

#             return render(request, "dashboard.html", {"form":form})
#     else:
#         form = profile()
#     return render(request, "settings.html", {'form':form})



# def settings(request):
#     # dictionary for initial data with
#     # field names as keys
#     context ={}
 
#     # add the dictionary during initialization
#     form = profile(request.POST or None)
#     if form.is_valid():
#         form.save()
         
#     context['form'] = form
#     return render(request, "settings.html", context)



# def withdraw(request):
#     return render(request, "withdraw.html")
    

# def fund(request):
#     return render(request, "fund-account.html")


# def investments(request):
#     return render(request, "my-investments.html")

@login_required(login_url="/login/")
def pages(request):
    context = {}
    # All resource paths end in .html.
    # Pick out the html file name from the url. And load that template.
    try:
        
        load_template = request.path.split('/')[-1]
        html_template = loader.get_template( load_template )
        return HttpResponse(html_template.render(context, request))
        
    except template.TemplateDoesNotExist:

        html_template = loader.get_template( 'page-404.html' )
        return HttpResponse(html_template.render(context, request))

    except:
    
        html_template = loader.get_template( 'page-500.html' )
        return HttpResponse(html_template.render(context, request))







@login_required(login_url="/login/")
def profileUpdate(request):
    msg = ''

    # see = profile.objects.get(id=user.id)

    if request.method == "POST":
        profile_form = profileEditForm(instance=request.user.profile,
        data=request.POST)
        if profile_form.is_valid():
            profile_form.save()
            msg = 'Uploaded successfully'
            profile_form = profileEditForm()
        else:
            profile_form= profileEditForm()
            msg = 'Invalid Details'

    else:
        profile_form = profileEditForm()
    

    return render(request, "settings.html", {"form": profile_form, "msg" : msg})


  



@login_required(login_url="/login/")
def withdraw(request):
    msg = ""

    if request.method == "POST":
        updatedebit = DebitEditForm(instance=request.user.profile,
        data=request.POST)
        if updatedebit.is_valid():
            updatedebit.save()
            msg = 'Request Submitted Successfully'
            updatedebit = DebitEditForm()
        else:
            updatedebit= DebitEditForm()
            msg = 'Invalid Details'

    else:
        updatedebit = DebitEditForm()
    
    return render(request, "withdraw.html", {'debit':updatedebit, 'msg':msg})

def calculate_amount():
    amount = (1/5900)*200

    print(amount)



def get_crypto_data():
    # api_url = "https://api.coinmarketcap.com/v2/ticker/?limit=10"

    # try:
    #     data = requests.get(api_url).json()
    # except Exception as e:
    #     print(e)
    #     data = dict()
    #     print(data)

    # return data
   

    url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest'
    parameters = {
    'id':'1',
    'convert':'USD'
    }
    headers = {
    'Accepts': 'application/json',
  

    # my api key
    'X-CMC_PRO_API_KEY': '439a6f18-ad33-459b-84e9-16b5f51c81bc',

    }

    session = Session()
    session.headers.update(headers)
    try:
        response = session.get(url, params=parameters)
        data = json.loads(response.text)['data']['1']['quote']['USD']['price']

        print(data)
        # print()
        return round(data, 4)


    except (ConnectionError, Timeout, TooManyRedirects) as e:
        print(e)



    
def get_crypto_data_eth():
    url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest'
    parameters = {
    'id':'1027',   
    'convert':'USD'
    }
    headers = {
    'Accepts': 'application/json',
    
    # my api key
    'X-CMC_PRO_API_KEY': '439a6f18-ad33-459b-84e9-16b5f51c81bc',

    }

    session = Session()
    session.headers.update(headers)
    try:
        response = session.get(url, params=parameters)
        data = json.loads(response.text)['data']['1027']['quote']['USD']['price']

        print(data)
        # print()
        return data


    except (ConnectionError, Timeout, TooManyRedirects) as e:
        print(e)



@login_required(login_url="/login/")
def fundAccount(request):
    msg = ""

    if request.method == "POST":
        updatecredit = creditEditForm(instance=request.user.profile,
        data=request.POST)
        if updatecredit.is_valid():
            updatecredit.save()
            msg = ''
            updatecredit = creditEditForm()
        else:
            updatecredit= creditEditForm()
            msg = 'Invalid Details'

    else:
        updatecredit = creditEditForm()
    


   
    if request.user.profile.fund_method == 'BTC':
        btc_data = get_crypto_data()
        btc_data = round((1/btc_data)* float(request.user.profile.fund_amount), 8)
        
    else:
        btc_data = None
    
    if request.user.profile.fund_method == 'ETH':
        eth_data = get_crypto_data_eth()
        print(type(eth_data))
        eth_data = round((1/eth_data)* float(request.user.profile.fund_amount), 8)
        
    else:
        eth_data = None




    return render(request, "fund-account.html", {'credit':updatecredit, "msg": msg, 'data':btc_data, 'eth_data':eth_data })



@login_required(login_url="/login/")
def depositHistory(request):
    return render(request, "deposit.html")



@login_required(login_url="/login/")
def earnings(request):
    return render(request, "earnings.html")



@login_required(login_url="/login/")
def investments(request):
    return render(request, "my-investments.html")




@login_required(login_url="/login/")
def purchasePlan(request):
    return render(request, "purchase-plan.html")