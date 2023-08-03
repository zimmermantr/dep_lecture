from django.db import models
from user_app.models import App_user


# Create your models here.
class List(models.Model):
    list_name = models.CharField()
    app_user = models.ForeignKey(
        App_user, on_delete=models.CASCADE, related_name="lists", default=2
    )

    def __str__(self):
        return f"{self.list_name}"
