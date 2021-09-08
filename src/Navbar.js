import { useState, useRef, useEffect } from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg'

//zamiast wypisywać linki bezpośrednio w tym komponencie można stworzyć oddzielny plik z danymi do linków oraz social mediów a w tym komponencie po prostu renderować 

const Navbar = () => {
  return <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className='nav-toggle'>
            <FaBars />
          </button>
        </div>
        <div className="links-container show-container">
          {/* na tym etapie są zwykłe linki, później będzie react-router */}
          {/* przykład wykorzystania zewnętrznych danych do wyświetlenia linków, bardzo użyteczne bo dobre do utrzymania kodu */}
          <ul className="links">
            {links.map( link => {
              const {id, url, text} = link;
              return <li key={id}>
                <a href={url}>{text}</a>
              </li>
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map( media => {
            const {id, url, icon} = media;
            return <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          })}
        </ul>
      </div>
  </nav>
}

export default Navbar;