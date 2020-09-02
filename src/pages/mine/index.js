import React from 'react'
import Store from '@/store'

function Mine() {
  const { v3, setV3 } = Store.useContainer()
  return (
    <div onClick={() => setV3(999999)}>this is mine page!!{v3}</div>
  )
}

export default Mine