import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
<div>KİTAP <span>DİYARI</span></div>
        <nav>
            <NavLink to={'/'}>Ana Sayfa</NavLink>
            <NavLink to={'/ürünler'}>Ürünler</NavLink>
        </nav>
    </header>
  )
}

export default Header