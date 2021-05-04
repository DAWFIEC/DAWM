from django.urls import path
 
from . import views
 
urlpatterns = [
	path('', views.index, name='index'),
	path('facultad/<int:facultad_id>/', views.detail, name='detail'),
]