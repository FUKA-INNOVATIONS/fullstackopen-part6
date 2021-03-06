const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  let newState = {}
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      return {
        ...state,
        good: state.good + action.data
      }
    case 'OK':
      return {
        ...state,
        ok: state.ok + action.data
      }
    case 'BAD':
      return {
        ...state,
        bad: state.bad + action.data
      }
    case 'ZERO':
      return initialState
    default: return state
  }
  
}

export default counterReducer