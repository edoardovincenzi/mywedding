import { GrClose } from 'react-icons/gr';
import { useState } from 'react';
import Portal from '../../portal/portal.js';
import ButtonNavbar from './navbar/ButtonNavbar';

function Hamburger() {
  const [openMenu, setOpenMenu] = useState(false);

  const OpenMenu = () => {
    setOpenMenu((old) => !old);
  };

  return (
    <div>
      <button
        className="invisible max-lg:visible"
        style={{ display: openMenu ? 'none' : 'block' }}
        aria-label="hamburger"
        type="button"
        onClick={OpenMenu}
      >
        <GrClose width="40" height="40" />
      </button>
      <Portal>
        <div
          id="hamburgerMenu"
          className={`fixed flex justify-center w-full h-full left-[-100%] ease-in-out duration-300 text-[#fffcf2]
          ${openMenu ? 'left-0 bg-black opacity-95' : ''}`}
        >
          <div className="right-10 top-4 absolute">
            <button
              aria-label="close-button"
              type="button"
              onClick={OpenMenu}
              className="absolute right-0"
            >
              <GrClose width="40" height="40" />
            </button>
          </div>
          <ul className="h-full flex flex-col justify-center items-center gap-24 landscape:max-lg:gap-5">
            <li
              onClick={OpenMenu}
              className={`animate__animated ${
                openMenu ? 'animate__fadeInLeft' : ''
              }`}
            >
              <ButtonNavbar title="HOME" href="/home" />
            </li>
            <li
              onClick={OpenMenu}
              className={`animate__animated ${
                openMenu ? 'animate__fadeInLeft' : ''
              }`}
            >
              <ButtonNavbar title="TIME BLOCK" href="/time-block" />
            </li>
            <li
              onClick={OpenMenu}
              className={`animate__animated ${
                openMenu ? 'animate__fadeInLeft' : ''
              }`}
            >
              <ButtonNavbar title="VICINO A ME" href="/near-me" />
            </li>
            <li
              onClick={OpenMenu}
              className={`animate__animated ${
                openMenu ? 'animate__fadeInLeft' : ''
              }`}
            >
              <ButtonNavbar title="CONTATTI" href="/about" />
            </li>
          </ul>
        </div>
      </Portal>
    </div>
  );
}

export default Hamburger;
