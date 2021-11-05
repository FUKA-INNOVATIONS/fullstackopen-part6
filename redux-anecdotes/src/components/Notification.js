import React from 'react'
import { connect, useSelector } from 'react-redux'

const Notification = props => {
  //const notification = useSelector(state => state.notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if (props.notification !== null ) {
    return (
        <div style={style}>
          { props.notification }
        </div>
    )
  } else {
    return (
        <>
        </>
    )
  }
}

const mapStateToProps = state => {
  return {
    notification: state.notification
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)
export default ConnectedNotification