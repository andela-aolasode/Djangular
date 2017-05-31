from rest_framework.routers import DefaultRouter

from .api import CardViewSet, ListViewSet


router = DefaultRouter()
router.register(r'lists', ListViewSet)
router.register(r'cards', CardViewSet)

urlpatterns = router.urls
