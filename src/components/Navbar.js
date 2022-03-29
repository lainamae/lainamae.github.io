import React, { Component, useState } from 'react';
import menu from '../img/menu.png';
import { Link } from 'react-router-dom';
import useWindowSize from "../utilities/useWindowSize"


export default function Navbar() {

  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  const [hovered2, setHovered2] = useState(false);
  const toggleHover2 = () => setHovered2(!hovered2);
  const [hovered3, setHovered3] = useState(false);
  const toggleHover3 = () => setHovered3(!hovered3);
  const [hovered4, setHovered4] = useState(false);
  const toggleHover4 = () => setHovered4(!hovered4);

  const [menuVisable, setMenuVisable] = useState(false);
  const toggleMenu = () => setMenuVisable(!menuVisable);

  const { width } = useWindowSize();
  let Menu;
  if (width > 600) {
    Menu = <ul className='desktop-menu'>
      <li className='navlinks' onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
        <Link to="/#home">Home</Link>
        <span className={hovered ? 'active' : 'inactive'}></span>
      </li>
      <li className='navlinks' onMouseEnter={toggleHover2} onMouseLeave={toggleHover2}>
        <Link to="/projects">Portfolio</Link>
        <span className={hovered2 ? 'active' : 'inactive'}></span>
      </li>
      <li className='navlinks' onMouseEnter={toggleHover3} onMouseLeave={toggleHover3}>
        <Link to="/blog">Blog</Link>
        <span className={hovered3 ? 'active' : 'inactive'}></span>
      </li>
      <li className='navlinks' onMouseEnter={toggleHover4} onMouseLeave={toggleHover4}>
        <Link to="/contact">Connect</Link>
        <span className={hovered4 ? 'active' : 'inactive'}></span>
      </li>
    </ul>;
  } else {
    Menu = <div className='mobile-menu-container'><button onClick={toggleMenu}><img src={menu} width="25px" alt="toggle menu"></img></button><span className={menuVisable ? 'visible' : 'hide'}><ul className='mobile-menu'>
      <li>
        <Link to="/#home" onClick={toggleMenu}>Home</Link>
      </li>
      <li>
        <Link to="/projects" onClick={toggleMenu}>Portfolio</Link>
      </li>
      <li>
        <Link to="/blog" onClick={toggleMenu}>Blog</Link>
      </li>
      <li>
        <Link to="/contact" onClick={toggleMenu}>Connect</Link>
      </li>
    </ul></span></div>
      ;
  }
  return (
    <div className="Navbar">
      {Menu}
    </div>
  );
}
