from django.apps import AppConfig


class LiveClassesConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'apps.live_classes'
    verbose_name = 'Live Classes'
    
    def ready(self):
        import apps.live_classes.signals
