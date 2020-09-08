import React from 'react'
import { useHistory } from 'react-router-dom'
import { Menu, Dropdown } from 'antd'
import { UserOutlined, DownOutlined } from '@ant-design/icons'

const container = {
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  paddingRight: '30px'
}
const userIconStyle = {
  fontSize: '20px',
  color: '#999999',
  cursor: 'pointer'
}
const fontStyle = {
  color: '#999999',
  marginLeft: '5px',
  marginRight: '5px'
}

function Head() {
  const history = useHistory()

  const logOut = () => {
    // todo
    history.push('/login')
  }

  const menuClick = e => {
    switch (e.key) {
      case 'logout':
        logOut()
        break
      default:
    }
  }

  const menu = (
    <Menu onClick={menuClick}>
      <Menu.Item key={'logout'}>退出登录</Menu.Item>
    </Menu>
  )

  return (
    <div style={container}>
      <Dropdown overlay={menu}>
        <div className='ant-dropdown-link' style={{ cursor: 'pointer' }}>
          <UserOutlined style={userIconStyle} />
          <span style={fontStyle}>管理员</span>
          <DownOutlined style={{ color: '#999999' }} />
        </div>
      </Dropdown>
    </div>
  )
}

export default Head
