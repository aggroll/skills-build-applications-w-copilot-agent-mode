from django.test import TestCase
from django.contrib.auth.models import User
from .models import Team, Activity, Leaderboard, Workout

class ModelTests(TestCase):
    def setUp(self):
        self.team = Team.objects.create(name='Marvel')
        self.user = User.objects.create_user(username='ironman', email='ironman@marvel.com')
        self.workout = Workout.objects.create(name='Super Strength', description='Strength training for superheroes')
        self.activity = Activity.objects.create(name='Run', user=self.user, team=self.team)
        self.leaderboard = Leaderboard.objects.create(team=self.team, points=100)

    def test_team_str(self):
        self.assertEqual(str(self.team), 'Marvel')

    def test_user_str(self):
        self.assertEqual(self.user.username, 'ironman')

    def test_workout_str(self):
        self.assertEqual(str(self.workout), 'Super Strength')

    def test_activity_str(self):
        self.assertIn('Run', str(self.activity))

    def test_leaderboard_str(self):
        self.assertIn('Marvel', str(self.leaderboard))
