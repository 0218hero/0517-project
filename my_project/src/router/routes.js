//所有路由配置对象的数组
import CategoryList from '@/pages/CategoryList/CategoryList.vue'
import HomePage from '@/pages/HomePage/HomePage.vue'
import Profile from '@/pages/Profile/Profile.vue'
import Search from '@/pages/Search/Search.vue'
import Shopcart from '@/pages/Shopcart/Shopcart.vue'
import Category from '../pages/CategoryList/Category/Category.vue';

export default [
  {
    path:'/homepage',
    component:HomePage,
    meta: {
      isShow: true
    }
  },
  {
    path:'/search',
    component:Search
  },
  {
    path:'/categorylist',
    component:CategoryList,
    meta:{
      isShow:true
    },
    children:[
      {
        path: '/categorylist/category',
        component: Category,
        meta: {
          isShow: true
        }
      },
      {
        path:'',
        redirect:'/categorylist/category'
      }
    ]
  },
  {
    path:'/shopcart',
    component:Shopcart,
    meta: {
      isShow: true
    }
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
