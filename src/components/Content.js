import React from 'react'
import heroImage from '../images/hero.svg'

function Content() {
    return (
        <div className="content">
            <div className="text-content">
                <h1>Talk to your Friends in Real-Time</h1>
                <h3>Live chat app that works hard for you, so you have to.</h3>
                <button>
                    Get Started
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31">
                        <g id="_24x24_On_Dark_Arrow-Right" data-name="24x24/On Dark/Arrow-Right" transform="translate(0.035 0.334)">
                            <rect id="view-box" width="30" height="31" transform="translate(-0.035 -0.334)" fill="none" />
                            <path id="Shape" d="M.276,12.827a.941.941,0,0,0,1.331,1.331L7.882,7.882a.941.941,0,0,0,0-1.331L1.607.276A.941.941,0,0,0,.276,1.607l5.61,5.61Z" transform="translate(11.891 7.676)" fill="#fff" />
                        </g>
                    </svg>
                </button>
            </div>
            <img src={heroImage} alt="rechat" />
        </div>
    )
}

export default Content
