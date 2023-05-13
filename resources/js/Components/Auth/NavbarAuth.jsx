import React, {useState} from 'react'
import '../../../../public/Assets/Auth/NavbarAuth.scss'
import {AiFillCloseCircle } from 'react-icons/ai'
import {HiMenu } from 'react-icons/Hi'
import Logo from '../../../../public/Assets/Images/Logo.png'

const NavbarAuth = () => {

  const [active, setActive] = useState('navbar')
    const showMenu = ()=>{
            setActive('navbar displayMenu')
    }
    const removeMenu = ()=>{
        setActive('navbar')
}

  return (
    <header className="header">
      <div className="logoDiv">
        <img src={Logo} alt="" />
        <span className="logo">&nbsp;Libman School</span>
        </div>

      <div className={active}>
      <div className="navbar">
        <ul onClick={removeMenu} className="navMenu">
          <li className="navItem">
            <a href="#beranda" className="navLink">Beranda</a>
          </li>
          <li className="navItem">
            <a href="#tentang_aplikasi" className="navLink">Tentang Aplikasi</a>
          </li>
          <li className="navItem">
            <a href="#pelayanan_pelanggan" className="navLink">Pelayanan Pelanggan</a>
          </li>
          
        </ul>

        <div onClick={removeMenu} className="closeNavbarIcon">
          <AiFillCloseCircle className='icon'/>
        </div>
      </div>
    </div>
    
      <div onClick={showMenu} className="toggleNavbarIcon">
        <HiMenu className='icon'/>
      </div>
    </header>
  )
}

export default NavbarAuth
