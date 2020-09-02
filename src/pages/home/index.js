import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './index.module.less'
import { setTaskId } from '@/store/testModule'

function Home() {
  const dispatch = useDispatch()
  console.log('home render')
  const taskId = useSelector(state => state.testModule.taskId)

  return (
    <div className={styles.container}>
      <p onClick={() => dispatch(setTaskId('ddddddddd'))}>click{taskId}</p>
      <Test></Test>
    </div>
  )
}

const Test = () => {
  console.log('test render')
  return (
    <div>~~~~~~~ page!!</div>
  )
}

export default Home