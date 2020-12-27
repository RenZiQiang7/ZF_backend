import Vue from 'vue'
import VueRouter from 'vue-router'
import vipRouter from "./routes/Vip/Vip"

import HomeRouter from './routes/home'
import TicketRouter from './routes/ticket/ticket'
Vue.use(VueRouter)
import loginRouter from "./routes/login";
import roomorderRouter from './routes/order/roomorder'
import WechatRouter from './routes/wechat/wechatRouter'
const routes = [
  ...vipRouter,

  loginRouter,
  roomorderRouter,
  HomeRouter,
  TicketRouter,
  WechatRouter,
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
