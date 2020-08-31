import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    return (
        <div className="login">
            <div className="input-box">
                <strong><label htmlFor="input" className="label-name">Your Name</label></strong>
                <input type="text" className="textbox" placeholder="For Example, John Doe" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className="input-box">
                <strong><label htmlFor="input" className="label-name">Room Name or ID</label></strong>
                <input type="text" className="textbox" placeholder="For Example, React_Room" value={room} onChange={e => setRoom(e.target.value)} />
            </div>
            <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`} className='link'>
                <button>
                    <strong>Join Room</strong>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 30 31">
                        <g id="_24x24_On_Dark_Arrow-Right" data-name="24x24/On Dark/Arrow-Right" transform="translate(0.035 0.334)">
                            <rect id="view-box" width="20" height="21" transform="translate(-0.035 -0.334)" fill="none" />
                            <path id="Shape" d="M.276,12.827a.941.941,0,0,0,1.331,1.331L7.882,7.882a.941.941,0,0,0,0-1.331L1.607.276A.941.941,0,0,0,.276,1.607l5.61,5.61Z" transform="translate(11.891 7.676)" fill="#fff" />
                        </g>
                    </svg>
                </button>
            </Link>
        </div>
    )
}

export default Login
