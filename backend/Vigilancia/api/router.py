from rest_framework import routers
from .views import VigilanciaViewSet, DiasVigilanciaViewSet

router = routers.DefaultRouter()

# [GET] [POST] api/vigilancias/
# [UPDATE] [DELETE] api/vigilancias/{id}
router.register('api/vigilancias', VigilanciaViewSet, 'vigilancias')

# [GET] [POST] api/dias_vigilancias/
# [UPDATE] [DELETE] api/dias_vigilancias/{id}
router.register('api/dias_vigilancias', DiasVigilanciaViewSet, 'dias_vigilancias')

urlpatterns = router.urls