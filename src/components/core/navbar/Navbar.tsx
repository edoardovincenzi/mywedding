import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { languages } from '../../../utils/languages';
import Hamburger from '../Hamburger';
import ButtonNavbar from './ButtonNavbar';
import Logo from '../../../assets/Logo';
import ReactCountryFlag from 'react-country-flag';

function Navbar() {
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();
  return (
    <header
      id="navbar"
      className={`w-full fixed py-4 px-3 top-0 h-20 bg-white shadow-custom ease-in-out duration-300 max-sm:px-10 z-[1001]`}
    >
      <div className="h-full w-full flex justify-between items-center">
        <div className="w-fit">
          <Link to="/home">
            <Logo />
          </Link>
        </div>
        <nav className="max-lg:hidden flex items-center justify-center gap-5 md:basis-3/5 w-full  h-max">
          <ButtonNavbar
            title={t('navBar.home')}
            href="/"
            active={pathname === '/'}
          />
          <ButtonNavbar
            title={t('navBar.event')}
            href="/event"
            active={pathname === '/event'}
          />
          <ButtonNavbar
            title={t('navBar.nearMe')}
            href="/near-me"
            active={pathname === '/near-me'}
          />
          <ButtonNavbar
            title={t('navBar.weddingList')}
            href="/wedding-list"
            active={pathname === '/wedding-list'}
          />
          <div className="w-[12vw]">
            {Object.keys(languages).map((lng: any) => (
              <button
                key={lng}
                style={{
                  fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal',
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
        </nav>
        <Hamburger />
      </div>
    </header>
  );
}

export default Navbar;
