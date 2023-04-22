/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import rishabh from '../images/logo7.png'

const Footer = () => {
  return (
    <footer className='main-footer'>
      <div className='footer-left'>
        <img className='logor' src={rishabh} alt="" />
        Rishabh Jain - The Code Being
        <br />
        <br />
        <p>Code day-by-day in a progressive form
          <br /> is the best way to learn and build.</p>
      </div>

      <div className='footer-center'>
        <div className=''>
          Made by Rishabh with ❤️💙 - <a href="https://github.com/RishabhJain-11" target='_blank' rel="noreferrer">Github</a>
        </div>
        <br />
        <br />
        <button><a href="">Email📧</a></button>
      </div>

      <div className='footer-right'>
        <button>Twitter</button>
        <button>Phone</button>
        <button>Discord</button>
        <button>Facebook</button>
        <br />
        <br />
        <button>Showwcase</button>
        <button>Dev.to</button>
        <button>Blogs</button>
        <button>Kaggle</button>
      </div>
    </footer>
  )
}

export default Footer