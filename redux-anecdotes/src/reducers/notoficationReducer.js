const notificationReducer = (state = null, action) => {

  switch ( action.type ) {
    case 'CREATE_MESSAGE':
      return action.data.message
    default:
      return state
  }
}

export const createMessage = (message) => {
  return {
    type: 'CREATE_MESSAGE',
    data: { message }
  }
}

export default notificationReducer