import React from 'react'
import { Route } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import routes from '@/router'
import { BASE_PATH } from '@/utils/config'

const { Header, Content, Footer, Sider } = Layout
const siderStyle = {
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  left: 0
}
const headerStyle = { padding: 0 }
const contentStyle = { margin: '24px 16px 0', overflow: 'initial' }
const logoStyle = { height: '32px', margin: '16px' }

const handleRoutes = (routes, basePath = '') => {
  const routeArray = []
  const menuArray = []
  routes.map(({ path, component, exact, name, icon, children = [] }) => {
    let childrenRouteInfoArr = []
    let childrenMenuInfoArr = []
    if (children.length) {
      ;({
        routeArray: childrenRouteInfoArr,
        menuArray: childrenMenuInfoArr
      } = handleRoutes(children, `${basePath}${path}`))
    }
    const routeInfo = {
      path: `${basePath}${path}`,
      exact: !!exact,
      component,
      name
    }
    const menuInfo = {
      path: `${basePath}${path}`,
      children: childrenMenuInfoArr,
      name,
      icon
    }
    routeArray.push(routeInfo, ...childrenRouteInfoArr)
    menuArray.push(menuInfo)
  })

  return {
    routeArray,
    menuArray
  }
}

const { routeArray, menuArray } = handleRoutes(routes, BASE_PATH)

const getMenuComponent = menus => {
  return menus.map(({ path, name, children, icon: Icon }) => {
    if (children && children.length) {
      return (
        <Menu.SubMenu title={name} icon={<Icon />} key={name}>
          {getMenuComponent(children)}
        </Menu.SubMenu>
      )
    }
    return <Menu.Item key={path}>{name}</Menu.Item>
  })
}

function LayoutPage() {
  const menuClick = e => {
    console.log('e', e)
  }

  return (
    <Layout>
      <Sider style={siderStyle}>
        <div style={logoStyle} />
        <Menu theme='dark' mode='inline' onClick={menuClick}>
          {getMenuComponent(menuArray)}
        </Menu>
      </Sider>
      <Layout className='site-layout' style={{ marginLeft: 200 }}>
        <Header className='site-layout-background' style={headerStyle} />
        <Content style={contentStyle}>
          {routeArray.map(({ path, component, exact }) => (
            <Route path={path} component={component} exact={exact} key={path} />
          ))}
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayoutPage
