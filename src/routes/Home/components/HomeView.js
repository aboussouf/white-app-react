import React from 'react'
import logo from '../assets/logo.png'
import './HomeView.scss'

export const HomeView = () => (
  <div>
    <h4>Welcome!</h4>
    <img alt='This is a logo !' className='logo' src={logo} />
    <button href="/Dashboard"/>
  </div>
)

export default HomeView
