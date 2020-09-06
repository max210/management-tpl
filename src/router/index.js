import { lazy } from 'react'
import { UserOutlined } from '@ant-design/icons'

const Layout = lazy(() => import('@/components/layout'))
const Home = lazy(() => import('@/pages/home'))
const Mine = lazy(() => import('@/pages/mine'))
const Test = lazy(() => import('@/pages/test'))

export default [
  {
    path: '/home',
    name: '首页',
    component: Home,
    exact: true,
    icon: UserOutlined
  },
  {
    path: '/user',
    name: '用户模块',
    icon: UserOutlined,
    children: [
      {
        path: '/management',
        name: '用户管理',
        component: Mine,
        exact: true,
        icon: UserOutlined,
        children: [
          {
            path: '/test',
            name: 'test',
            component: Test,
            exact: true,
            icon: UserOutlined
          }
        ]
      }
    ]
  }
]
