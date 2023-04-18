import React from 'react'
import rishabh from '../images/rishabhj.jpeg'

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="nav-right">
                    <img src={rishabh} className="logo" alt="logo" />
                    <a href='/' className='logo-name'>Rishabh Jain</a>
                </div>

                <div className='nav-left'>
                    <button>
                        Contact Form
                    </button>
                    <button>
                        Resume
                    </button>
                </div>
            </nav>

        </>


    )
}

export default Navbar