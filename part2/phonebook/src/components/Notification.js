import React from 'react'

const Notification = ({ message }) => {
    if (message === null) {
        return null
    }

    const notificationStyle = {
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

    return (
        <div className="notification"
             style={notificationStyle}>
        {message}
        </div>
    )
}

export default Notification