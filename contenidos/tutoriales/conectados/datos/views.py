from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

from .models import Facultad

def index(request):
    facultades = Facultad.objects.all()
    template = loader.get_template('index.html')
    context = {
        'facultades': facultades,
    }
    return HttpResponse(template.render(context, request))

def detail(request, facultad_id):
	try:
		facultad = Facultad.objects.get(pk=facultad_id)
	except Facultad.DoesNotExist:
		raise Http404("Facultad does not exist")

	return render(request, 'facultad_detail.html', {'facultad': facultad})