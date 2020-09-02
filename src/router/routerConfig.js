import { lazy } from 'react'

const Home = lazy(() => import('@/pages/home'))
const Mine = lazy(() => import('@/pages/mine'))

export default [
  {
    path: '/',
    name: '首页',
    component: Home,
    exact: true
  },
  {
    path: '/home',
    name: '首页',
    component: Home,
    exact: true
  },
  {
    path: '/mine',
    name: '我的',
    component: Mine,
    exact: true
  },
]
