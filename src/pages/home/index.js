import React from 'react'
import { BankTwoTone } from '@ant-design/icons'

const containerStyle = {
  width: '100%',
  height: ' 100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

function Home() {
  return (
    <div style={containerStyle}>
      <BankTwoTone style={{ fontSize: '80px' }} />
      <p style={{ fontSize: '20px' }}>欢迎来到管理后台系统</p>
    </div>
  )
}

export default Home
