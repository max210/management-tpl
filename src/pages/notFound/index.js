import React from 'react'
import img from '@/assets/images/404.png'
import style from './index.module.less'

function NotFound() {
  return (
    <div className={style.container}>
      <img src={img} className={style.img} alt='404' />
    </div>
  )
}

export default NotFound
