import React from 'react'

function SendMessage({ message, setMessage, sendMessage }) {
    return (
        <div className='send-message'>
            <input type='text' className="message-input"
                placeholder="Type message here....."
                value={message} onChange={e => setMessage(e.target.value)}
                onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}
            />
            <button onClick={e => sendMessage(e)}>
                <strong>Send Message</strong>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 30 31">
                    <g id="_24x24_On_Dark_Arrow-Right" data-name="24x24/On Dark/Arrow-Right" transform="translate(0.035 0.334)">
                        <rect id="view-box" width="20" height="21" transform="translate(-0.035 -0.334)" fill="none" />
                        <path id="Shape" d="M.276,12.827a.941.941,0,0,0,1.331,1.331L7.882,7.882a.941.941,0,0,0,0-1.331L1.607.276A.941.941,0,0,0,.276,1.607l5.61,5.61Z" transform="translate(11.891 7.676)" fill="#fff" />
                    </g>
                </svg>
            </button>

        </div>
    )
}

export default SendMessage
