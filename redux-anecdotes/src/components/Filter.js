import React from 'react'
import { connect } from 'react-redux'
import { filterByTerm } from '../reducers/filterReducer'
//import { useDispatch } from 'react-redux'

const Filter = props => {
  //const dispatch = useDispatch()
  const handleChange = (event) => {
    //dispatch(filterByTerm(event.target.value))
    props.filterByTerm(event.target.value)
  }
  const style = {
    marginBottom: 10
  }

  return (
      <div style={style}>
        filter <input onChange={handleChange} />
      </div>
  )
}
const mapDispatchToProps = {
  filterByTerm
}

export default connect(
    null,
    mapDispatchToProps
)(Filter)