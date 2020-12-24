import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeRouter from './routes/home'
import TicketRouter from './routes/ticket/ticket'
Vue.use(VueRouter)
import loginRouter from "./routes/login";
const routes = [

  loginRouter,
  HomeRouter,
  TicketRouter,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
