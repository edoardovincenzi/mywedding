import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from '../Hamburger';
import ButtonNavbar from './ButtonNavbar';

function Navbar() {
  return (
    <header
      id="navbar"
      className={`w-full fixed py-4 px-3 top-0 h-20 bg-white shadow-custom ease-in-out duration-300 max-sm:px-10 z-[1001]`}
    >
      <div className="h-full flex justify-between items-center">
        <div className="w-fit">
          <Link to="/home">
            <i>M Y</i>
          </Link>
        </div>
        <nav className="max-lg:hidden flex items-center justify-center gap-5 md:basis-3/5">
          <ButtonNavbar title="HOME" href="/home" />
          <ButtonNavbar title="TIME BLOCK" href="/time-block" />
          <ButtonNavbar title="VICINO A ME" href="/near-me" />
          <ButtonNavbar title="CONTATTI" href="/about" />
        </nav>
        <Hamburger />
      </div>
    </header>
  );
}

export default Navbar;
