import { lazy } from 'react'
import { UserOutlined } from '@ant-design/icons'

const Home = lazy(() => import('@/pages/home'))
const UserManagement = lazy(() => import('@/pages/user/userManagement'))

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
        component: UserManagement,
        exact: true,
        icon: UserOutlined
      }
    ]
  }
]
