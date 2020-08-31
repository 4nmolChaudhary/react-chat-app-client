import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import ChatRoomHeader from './ChatRoomHeader'
import SendMessage from './SendMessage'
import Messages from './Messages'

let socket

function Chat({ location }) {

    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const ENDPOINT = 'https://reactsocketchatappserver.herokuapp.com/'

    useEffect(() => {
        const { name, room } = queryString.parse(location.search)
        socket = io(ENDPOINT)

        setName(name)
        setRoom(room)

        socket.emit('join', { name, room }, ({ error }) => {
            alert(error)
        })

        return () => {
            socket.emit('disconnect')
            socket.off()
        }
    }, [ENDPOINT, location.search])

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message])
        })
    }, [messages])

    const sendMessage = (e) => {
        e.preventDefault()
        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''))
        }
    }

    console.log(messages, message)

    return (
        <div className='chat-room'>
            <div className='chat-box'>
                <ChatRoomHeader room={room} name={name} />
                <Messages messages={messages} name={name} />
                <SendMessage message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>


        </div>
    )
}

export default Chat
