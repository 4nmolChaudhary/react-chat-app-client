import React from 'react'

function Message({ message: { user, text }, name }) {
    let isSentByYou = false
    const trimmedName = name.trim().toLowerCase()

    if (user === trimmedName) {
        isSentByYou = true
    }

    return (
        isSentByYou
            ?
            (
                <div className="message-container-by-you">
                    <div className="sent-by">{name}</div>
                    <div className="message-box">{text}</div>
                </div>
            )
            :
            user === 'admin' ?
                (<div className="message-by-admin">{text}</div>)
                :
                (
                    <div className="message-container-not-by-you">
                        <div className="sent-by">{user}</div>
                        <div className="message-box">{text}</div>
                    </div>
                )
    )
}

export default Message
