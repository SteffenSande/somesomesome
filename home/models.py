from django.db import models

# Create your models here.


class Searches(models.Model):
    search = models.CharField(max_length=200)

    def __str__(self):
        return self.search
