import React from 'react'
import Login from './Login'
import Header from './Header';


function Content() {
    return (
        <div className="content">
            <div className="text-content">
                <Header />
                <div className="inner-content">
                    <h1>Talk to your Friends in Real-Time</h1>
                    <h3><strong>Live chat app that works hard for you, so you have to.</strong></h3>
                    <Login />
                </div>
            </div>
            <div className="image">
            </div>
        </div>
    )
}

export default Content
