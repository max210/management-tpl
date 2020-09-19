import React from 'react'
import { LoadingOutlined } from '@ant-design/icons'

function Loading() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <LoadingOutlined style={{ fontSize: '60px', marginTop: '100px', color: '#40a9ff' }} />
    </div>
  )
}

export default Loading
