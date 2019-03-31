// 包含所有路由的数组
import Msite from '../pages/Msite/Msite'
import Classify from '../pages/Classify/Classify'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'

export default [
  {
    path: '/msite',
    component: Msite,
    meta: {
      isShow: true
    }
  },
  {
    path: '/classify',
    component: Classify,
    meta: {
      isShow: true
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      isShow: true
    }
  },
  {
    path: '/order',
    component: Order,
    meta: {
      isShow: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      isShow: true
    }
  },
  {
    path: '/',
    redirect: '/msite'
  }
]
