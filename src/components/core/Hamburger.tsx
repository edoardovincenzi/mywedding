import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import ButtonNavbar from './navbar/ButtonNavbar';
import { languages } from '../../utils/languages.js';
import { useTranslation } from 'react-i18next';
import { createPortal } from 'react-dom';
import ReactCountryFlag from 'react-country-flag';
import { useLocation } from 'react-router-dom';

function Hamburger() {
  const { t, i18n } = useTranslation();
  const [openMenu, setOpenMenu] = useState(false);
  const { pathname } = useLocation();

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
      {createPortal(
        <div
          id="hamburgerMenu"
          className={`fixed z-[1003] top-0 flex justify-center w-full h-full left-[-100%] ease-in-out duration-300 text-[#fffcf2]
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
          <ul className="h-full flex flex-col justify-center items-center gap-10 landscape:max-lg:gap-3">
            <li
              onClick={OpenMenu}
              className={`animate__animated ${
                openMenu ? 'animate__fadeInLeft' : ''
              }`}
            >
              <ButtonNavbar
                title={t('navBar.home')}
                href="/home"
                active={pathname === '/'}
              />
            </li>
            <li
              onClick={OpenMenu}
              className={`animate__animated ${
                openMenu ? 'animate__fadeInLeft' : ''
              }`}
            >
              <ButtonNavbar
                title={t('navBar.event')}
                href="/event"
                active={pathname === '/event'}
              />
            </li>
            <li
              onClick={OpenMenu}
              className={`animate__animated ${
                openMenu ? 'animate__fadeInLeft' : ''
              }`}
            >
              <ButtonNavbar
                title={t('navBar.nearMe')}
                href="/near-me"
                active={pathname === '/near-me'}
              />
            </li>
            <li
              onClick={OpenMenu}
              className={`animate__animated ${
                openMenu ? 'animate__fadeInLeft' : ''
              }`}
            >
              <ButtonNavbar
                title={t('navBar.weddingList')}
                href="/wedding-list"
                active={pathname === '/wedding-list'}
              />
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
                    <ReactCountryFlag
                      className={`emojiFlag ${
                        i18n.language === lng
                          ? 'underline underline-offset-8 decoration-themeColor'
                          : ''
                      }`}
                      countryCode={lng.toUpperCase()}
                      style={{
                        fontSize: '2em',
                        lineHeight: '2em',
                      }}
                      aria-label={languages[lng].nativeName}
                    />
                  </button>
                ))}
              </div>
            </li>
          </ul>
        </div>,
        document.body
      )}
    </div>
  );
}

export default Hamburger;
