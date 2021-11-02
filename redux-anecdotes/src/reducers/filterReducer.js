const filterReducer = (state = null, action) => {
  switch (action.type) {
    case 'SEARCH_TERM':
      //console.log('TERM IS: ', action.data.term)
      return action.data.term
    default:
      return state
  }
}

export const filterByTerm = (term) => {
  return {
    type: 'SEARCH_TERM',
    data: { term }
  }
}

export default filterReducer