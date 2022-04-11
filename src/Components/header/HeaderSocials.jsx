import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/feed/' target='_blank'><BsLinkedin /></a>
        <a href='https://github.com/Saranyasaranyas' target='_blank'><FaGithub /></a>
        <a href='https://dribbble.com' target='_blank'><FiDribbble /></a>

    </div>
  )
}

export default HeaderSocials