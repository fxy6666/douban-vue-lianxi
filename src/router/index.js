import Vue from 'vue'
import Router from 'vue-router'



import Book from '../pages/book'
import Dianying from '../pages/dianying'
import Guangbo from '../pages/guangbo'
import Xiaozu from '../pages/xiaozu'
import Zhuye from '../pages/zhuye'
import Douban from '../components/Douban'



Vue.use(Router)

export default new Router({
  routes: [
    {path: '/Douban', name: 'Douban', component: Douban},
    {path: '/Book', name: 'Book', component: Book},
    {path: '/Dianying', name: 'Dianying', component: Dianying},
    {path: '/Guangbo', name: 'Guangbo', component: Guangbo},
    {path: '/Xiaozu', name: 'Xiaozu', component: Xiaozu},
    {path: '/Zhuye', name: 'Zhuye', component: Zhuye},],
    mode: "history"
})
