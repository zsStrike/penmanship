import os

from django.http import JsonResponse
from django.shortcuts import render
from django.contrib.sites.shortcuts import get_current_site
from django.views import View

from api.libs import convert_pdf, get_dir_detail, get_excel


# Create your views here.


class RenderView(View):
    def post(self, request):
        convert_pdf()
        return JsonResponse({})


class PdfDirView(View):
    def get(self, request):
        param = request.GET.get('dir', None)
        if param:
            result = get_dir_detail(param, get_current_site(request).name)
        else:
            result = []
        return JsonResponse(result, safe=False)


class ExcelDirView(View):
    def get(self, request):
        param = request.GET.get('dir', None)
        # result =
        if param:
            result = get_excel(param)
        else:
            result = []
        return JsonResponse(result, safe=False)
