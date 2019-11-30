from django.shortcuts import render
from django.http import HttpResponse

from .models import Coupon

def next_coupon():
    coupon = Coupon.objects.all()[0]
    code, url = coupon.code, coupon.url
    coupon.delete() # remove from database
    return code, url

def click(request):
    try:
        code, url = next_coupon()
        return HttpResponse('{}<br />{}'.format(code, url))
    except IndexError:
        return HttpResponse('No coupons left for today :(')

