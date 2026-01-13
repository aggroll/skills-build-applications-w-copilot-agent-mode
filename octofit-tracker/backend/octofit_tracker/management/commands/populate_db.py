
from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from octofit_tracker.models import Team, Activity, Leaderboard, Workout

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        User = get_user_model()
        # Delete all data
        # Delete in order to avoid FK issues
        if Activity.objects.exists():
            Activity.objects.all().delete()
        if Leaderboard.objects.exists():
            Leaderboard.objects.all().delete()
        if Workout.objects.exists():
            Workout.objects.all().delete()
        if Team.objects.exists():
            Team.objects.all().delete()
        if User.objects.exists():
            User.objects.all().delete()

        # Create teams
        marvel = Team.objects.create(name='Marvel')
        dc = Team.objects.create(name='DC')

        # Create users
        ironman = User.objects.create_user(username='ironman', email='ironman@marvel.com')
        captainamerica = User.objects.create_user(username='captainamerica', email='captainamerica@marvel.com')
        batman = User.objects.create_user(username='batman', email='batman@dc.com')
        wonderwoman = User.objects.create_user(username='wonderwoman', email='wonderwoman@dc.com')

        # Create activities
        Activity.objects.create(name='Run', user=ironman, team=marvel)
        Activity.objects.create(name='Swim', user=captainamerica, team=marvel)
        Activity.objects.create(name='Fly', user=batman, team=dc)
        Activity.objects.create(name='Lift', user=wonderwoman, team=dc)

        # Create leaderboard
        Leaderboard.objects.create(team=marvel, points=200)
        Leaderboard.objects.create(team=dc, points=180)

        # Create workouts
        Workout.objects.create(name='Super Strength', description='Strength training for superheroes')
        Workout.objects.create(name='Flight Training', description='Learn to fly like a hero')

        self.stdout.write(self.style.SUCCESS('octofit_db populated with test data'))
