import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Input, message, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import style from './index.module.less'

function Login() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const userNameOnchange = e => {
    setUserName(e.target.value)
  }

  const passwordOnchange = e => {
    setPassword(e.target.value)
  }

  const login = () => {
    if (!userName) {
      message.error('用户名不能为空')
      return
    }
    if (!password) {
      message.error('密码不能为空')
      return
    }
    history.push('/')
  }

  return (
    <div className={style.container}>
      <p className={style.title}>后台管理</p>
      <Input
        className={style.input}
        placeholder='请输入用户名'
        prefix={<UserOutlined />}
        value={userName}
        onChange={userNameOnchange}
      />
      <Input.Password
        className={style.input}
        placeholder='请输入密码'
        prefix={<LockOutlined />}
        value={password}
        onChange={passwordOnchange}
        onPressEnter={login}
      />
      <Button className={style.btn} type='primary' onClick={login}>
        登录
      </Button>
    </div>
  )
}

export default Login
