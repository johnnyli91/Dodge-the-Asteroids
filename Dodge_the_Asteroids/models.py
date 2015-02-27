from django.db import models


class Play(models.Model):
    game = models.CharField(max_length=100)
    score = models.IntegerField()

    def __unicode__(self):
        return self.game + " : " + str(self.score)