import React from 'react'
import "../css/TechStack.css"

const TechStack = () => {
    return (
        <div className='tech-stack-main'>
            <div className='head1er'>
                <h1 className='head1'>Tech Stack and Skills</h1>
            </div>
            <div className='lister-tech'>
                <div>
                    <h3 className='head1'>Frontend Development</h3>
                    <ul>
                        <li className='log-name'>React JS</li>
                        <li className='log-name'>Javascript</li>
                        <li className='log-name'>Next JS</li>
                        <li className='log-name'>Tailwind CSS</li>
                        <li className='log-name'>Typescript</li>
                        <li className='log-name'>HTML/CSS</li>
                    </ul>
                </div>
                <div>
                    <h3 className='head1'>Backend Development</h3>
                    <ul>
                        <li className='log-name'>Node JS - Express JS</li>
                        <li className='log-name'>SQL / Mongo DB</li>
                        <li className='log-name'>Firebase / Supabase</li>
                        <li className='log-name'>OAuth / Google Auth</li>
                        <li className='log-name'>REST API/ GraphQL</li>
                        <li className='log-name'>Payment Integration</li>
                    </ul>
                </div>
                <div>
                    <h3 className='head1'>Other Skills</h3>
                    <ul>
                        <li className='log-name'>Python</li>
                        <li className='log-name'>Java</li>
                        <li className='log-name'>Pandas</li>
                        <li className='log-name'>Keras - Seaborn</li>
                        <li className='log-name'>Tensorflow - Scikit</li>
                        <li className='log-name'>Docker</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default TechStack