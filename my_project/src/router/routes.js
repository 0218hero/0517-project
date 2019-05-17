//所有路由配置对象的数组
import CategoryList from '@/pages/CategoryList/CategoryList.vue'
import HomePage from '@/pages/HomePage/HomePage.vue'
import Profile from '@/pages/Profile/Profile.vue'
import Search from '@/pages/Search/Search.vue'
import Shopcart from '@/pages/Shopcart/Shopcart.vue'

export default [
  {
    path:'/homepage',
    component:HomePage
  },
  {
    path:'/categorylist',
    component:CategoryList
  },
  {
    path:'/search',
    component:Search
  },
  {
    path:'/shopcart',
    component:Shopcart
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/',
    redirect:'/homepage'
  }
]
