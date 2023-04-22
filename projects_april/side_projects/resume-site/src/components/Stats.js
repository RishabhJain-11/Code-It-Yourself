import React from 'react';
import '../css/Projects.css';
import { useState } from 'react';

const Projects = () => {
    const [cards] = useState([
        {
            title: 'Image Resizer',
            text: 'Designed to resize the images according to user requirements'
        },
        {
            title: 'Open AI Keyword Extractor',
            text: 'It extract main keywords from the given paragraph with the help of AI.'
        },
        {
            title: 'Digital Resume',
            text: 'A simple yet effective resume maker.'
        },
        {
            title: 'Imagen',
            text: 'A image which is created by giving the prompts to the AI Systems.'
        },
        {
            title: 'E-Commerce Website',
            text: 'This e-commerce platform uses stipe payment gateway for payments'
        }
        ,
        {
            title: 'QRator',
            text: 'It generates a QR Code for the provided link, which is easy to share and use.'
        }
        ,
        {
            title: 'QRator',
            text: 'It generates a QR Code for the provided link, which is easy to share and use.'
        }
        ,
        {
            title: 'QRator',
            text: 'It generates a QR Code for the provided link, which is easy to share and use.'
        }
        ,
        {
            title: 'QRator',
            text: 'It generates a QR Code for the provided link, which is easy to share and use.'
        },
        {
            title: 'E-Commerce Website',
            text: 'This e-commerce platform uses stipe payment gateway for payments'
        }
        ,
        {
            title: 'QRator',
            text: 'It generates a QR Code for the provided link, which is easy to share and use.'
        }
        ,
        {
            title: 'QRator',
            text: 'It generates a QR Code for the provided link, which is easy to share and use.'
        }
    ])
    return (
        <>
            <div className="projer">
                <div>
                    <section className='section-projects'>
                        <div className="contr">
                            <h1 className='head1'>Stats</h1>
                            <div className="cards">
                                {
                                    cards.map((cards, i) => (
                                        <div key={i} className="card">
                                            <h3>{cards.title}</h3>
                                            <p>{cards.text}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Projects