import React from 'react'
import Card from './Card'
import rishabh from '../images/rishabhj.jpeg'

const Projects = () => {
    return (
        <div className='card-container'>
            <Card
                title="Card Title"
                imageUrl={rishabh}
                body="Ok I am here aqwertyuio pasdfghjkl zxcvbnmn bvcdfgtedwrh"
            />
        </div>
    )
}

export default Projects