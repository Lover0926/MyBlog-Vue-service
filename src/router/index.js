import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Main from '../views/Main'
import Register from "../views/Register";
import Text from "../views/Text";
import WriteBlog from "../views/WriteBlog";
import Content  from "../views/Content";
import Header from "../views/Header";
import LeftMenu from "../views/LeftMenu";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    components:{
      leftmenu:LeftMenu,
      header:Header,
      main:Main
    }
  },
  {
    path: '/login',
    name: 'Login',
    components:{
      leftmenu:'',
      header:Header,
      main:Login
    }
  },
  {
    path: '/register',
    name: 'register',
    components: {
      leftmenu:'',
      header:Header,
       main:Register
    }
  },

  {
    path: '/text',
    name: 'text',
    component: Text
  },
  {
    path: '/writeBlog',
    name: 'writeBlog',
    components: {
      leftmenu:'',
      herder:'',
       main:WriteBlog
    }
  },
  {
    path: '/content/:blogid',
    name: 'content',
    components: {
      leftmenu:LeftMenu,
      header:Header,
      main:Content
    }
  }
  ,
  {
    path: '/header',
    name: 'header',
    components: {
      leftmenu:'',
      header:Header,
      main:''
    }
  }
  ,
  {
    path: '/leftmenu',
    name: 'leftmenu',
    components: {
      leftmenu:'',
      header:Header,
      main:LeftMenu
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
