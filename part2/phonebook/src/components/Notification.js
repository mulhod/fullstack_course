import React from 'react'

const Notification = ({ message, success }) => {
    if (message === null) {
        return null
    }

    let notificationStyle = {}
    if (success) {
        notificationStyle = {
            color: 'green',
            fontStyle: 'italic',
            fontSize: 20,
            backgroundColor: 'lightgrey',
            borderRadius: 5,
            padding: 10,
            marginBottom: 10,
            borderStyle: 'solid',
            borderColor: 'green'
        }
    } else {
        notificationStyle = {
            color: 'red',
            fontStyle: 'italic',
            fontSize: 20,
            backgroundColor: 'lightgrey',
            borderRadius: 5,
            padding: 10,
            marginBottom: 10,
            borderStyle: 'solid',
            borderColor: 'red'
        }
    }

    return (
        <div className="notification"
             style={notificationStyle}>
        {message}
        </div>
    )
}

export default Notification