// Actions
const TASK_ID = 'TASK_ID'

const defaultState = {
  taskId: 'ddd' // 练习id
}
// Reducer
export default function reducer(state = defaultState, action) {
  const type = action.type
  switch (type) {
    case TASK_ID:
      return { ...state, ...{ taskId: action.value } }
    default:
      return state
  }
}

// Action Creators
export const setTaskId = value => ({ type: TASK_ID, value })

// async function
// let timerId
// export const toast = toastShowText => dispatch => {
//   clearTimeout(timerId) // 防止多次点击
//   dispatch()
//   timerId = setTimeout(() => {
//     dispatch()
//   }, 1500)
// }