import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from './Message'

function Messages({ messages, name }) {
    return (
        <ScrollToBottom classname="messages">
            {
                messages.map((message, index) => <Message key={index} message={message} name={name} />)
            }
        </ScrollToBottom>
    )
}

export default Messages
