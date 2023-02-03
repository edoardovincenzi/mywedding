import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import Portal from '../../portal/portal.js';
import ButtonNavbar from './navbar/ButtonNavbar';
import { languages } from '../../utils/languages.js';
import { useTranslation } from 'react-i18next';

function Hamburger() {
  const { t, i18n } = useTranslation();
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
        <AiOutlineMenu className="text-black h-7 w-7" />
      </button>
      <Portal>
        <div
          id="hamburgerMenu"
          className={`fixed flex justify-center w-full h-full left-[-100%] ease-in-out duration-300 text-[#fffcf2]
          ${openMenu ? 'left-0 bg-black opacity-95' : ''}`}
        >
          <div className="right-3 top-7 absolute">
            <button
              aria-label="close-button"
              type="button"
              onClick={OpenMenu}
              className="absolute right-0"
            >
              <AiOutlineClose className="text-white h-7 w-7" />
            </button>
          </div>
          <ul className="h-full flex flex-col justify-center items-center gap-24 landscape:max-lg:gap-5">
            <li
              onClick={OpenMenu}
              className={`animate__animated ${
                openMenu ? 'animate__fadeInLeft' : ''
              }`}
            >
              <ButtonNavbar title={t('navBar.home')} href="/home" />
            </li>
            <li
              onClick={OpenMenu}
              className={`animate__animated ${
                openMenu ? 'animate__fadeInLeft' : ''
              }`}
            >
              <ButtonNavbar title={t('navBar.timeBlock')} href="/time-block" />
            </li>
            <li
              onClick={OpenMenu}
              className={`animate__animated ${
                openMenu ? 'animate__fadeInLeft' : ''
              }`}
            >
              <ButtonNavbar title={t('navBar.nearMe')} href="/near-me" />
            </li>
            <li
              onClick={OpenMenu}
              className={`animate__animated ${
                openMenu ? 'animate__fadeInLeft' : ''
              }`}
            >
              <ButtonNavbar title={t('navBar.about')} href="/about" />
            </li>
            <li
              className={`animate__animated ${
                openMenu ? 'animate__fadeInLeft' : ''
              }`}
            >
              <div>
                {Object.keys(languages).map((lng: any) => (
                  <button
                    key={lng}
                    style={{
                      fontWeight:
                        i18n.resolvedLanguage === lng ? 'bold' : 'normal',
                      paddingLeft: '8px',
                    }}
                    type="submit"
                    onClick={() => i18n.changeLanguage(lng)}
                  >
                    {languages[lng].nativeName}
                  </button>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </Portal>
    </div>
  );
}

export default Hamburger;
