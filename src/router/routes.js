// 包含所有路由的数组
import Msite from '../pages/Msite/Msite'
import Search from '../pages/Search/Search'
import Classify from '../pages/Classify/Classify'
import ClassifyList from '../pages/Classify/ClassifyList/ClassifyList'
import Identify from '../pages/Identify/Identify'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'

export default [
  {
    path: '/msite',
    component: Msite
  },
  {
    path: '/search',
    component: Search,
    meta: {
      hide:true
    }
  },
  {
    path: '/classify',
    component: Classify,
    redirect: '/classify/classifylist/1022001',
    children: [
      {
        path: '/classify/classifylist/:id',
        component: ClassifyList
      }
    ]
  },
  {
    path: '/identify',
    component: Identify
  },
  {
    path: '/order',
    component: Order
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      hide:true
    }
  },
  {
    path: '/',
    redirect: '/msite'
  }
]
