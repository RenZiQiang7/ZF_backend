import Vue from 'vue'
import VueRouter from 'vue-router'
import vipRouter from "./routes/Vip/Vip"
import HomeRouter from './routes/home'
import TicketRouter from './routes/ticket/ticket'
Vue.use(VueRouter)

const routes = [
  vipRouter,
  HomeRouter,
  TicketRouter,
]
Vue.use(VueRouter)





const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
