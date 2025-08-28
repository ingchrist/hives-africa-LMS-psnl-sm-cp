# apps/chat/apps.py
from django.apps import AppConfig


class ChatConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'apps.chat'
    verbose_name = 'Chat'

    def ready(self):
        """Import signals when the app is ready"""
        import apps.chat.signals

