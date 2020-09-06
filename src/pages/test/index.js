import React from 'react'

function Test() {
  return <p>this is 404 page@@@</p>
}

export default Test

// import { useSelector, useDispatch } from 'react-redux'
// function Home() {
//   const dispatch = useDispatch()
//   console.log('home render')
//   const taskId = useSelector(state => state.testModule.taskId)
//
//   return (
//     <div className={styles.container}>
//       <p onClick={() => dispatch(setTaskId('ddddddddd'))}>click{taskId}</p>
//       <Test></Test>
//     </div>
//   )
// }
