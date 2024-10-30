from django.shortcuts import render

def energize_inicio(request):
  return render(request, "inicio.html")


def energize_login(request):
  return render(request, "login.html")


def energize_index(request):
  return render(request, "index.html")


def energize_infos(request):
  return render(request, "infos.html")


def energize_login_1(request):
  return render(request, "login_1.html")


def energize_cadastro(request):
  return render(request, "cadastro.html")


# def create_user(request):
#   if request.method == "POST":
#     username = request.POST["username"]
#     password = request.POST["password"]
#     email = request.POST["email"]
#     user = User.objects.create_user(username, email, password)
#     user.save()
#     return redirect("home")
#   return render(request, "register.html")
# context = {"action": "Adicionar"}
