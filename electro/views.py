from django.shortcuts import render
from django.views.decorators.csrf import *
from django.core.mail import EmailMessage,BadHeaderError
from email_details import *

# Create your views here.
@csrf_exempt
def index(request):
	return render(request,'electro/index.html',{'type':'index'})

@csrf_exempt
def page_404(request):
	return render(request,'electro/404.html',{'type':'404'})

@csrf_exempt
def contact(request):
	if request.method == 'GET':
		return render(request,'electro/contact.html',{'type':'contact'})

	elif request.method == 'POST':
		name = request.POST['name']
		email = request.POST['email']
		subject = request.POST['subject']
		message = request.POST['message']
		try:
			send_email = EmailMessage(subject,name + "\n" + email + "\n" + message,email,[EMAIL_USER])
			#send_email.attach_file("filename")
			try:
				send_email.send()
				#return render(request,"electro/index.html",{'status':'Email successfully send. Thank you for showing interest our team contact you soon.','type':'contact'})
			except:
				return render(request,"electro/contact.html",{'status':'Some error in email service. Please try again later.','type':'contact'})
		except BadHeaderError:
			return render(request,"electro/contact.html",{'status':'Some error in email service. Please try again later.','type':'contact'})

		try:
			mess = 'Hello '+name+',\nThanks for showing interest, our team contact you soon.' + '\n' + 'Regards.'
			send_email = EmailMessage('Regarding your query to Electro Power',mess,EMAIL_USER,[email])
			try:
				send_email.send()
				return render(request,"electro/contact.html",{'status':'Email successfully send. Thank you for showing interest our team contact you soon.','type':'contact'})
			except:
				return render(request,"electro/contact.html",{'status':'Some error in email service. Please try again later.','type':'contact'})
		except BadHeaderError:
			return render(request,"electro/contact.html",{'status':'Some error in email service. Please try again later.','type':'contact'})
