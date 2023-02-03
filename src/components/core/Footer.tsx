import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="flex flex-col h-56 max-sm:h-72 pb-8 bg-[#2B2B2B] text-white">
      <div className="flex max-sm:flex-col max-sm:text-center max-sm:gap-3 max-sm:justify-start lg:justify-center lg:gap-12 my-8 w-full items-center justify-around">
        <div className="flex flex-col w-64">
          <p className="font-bold text-xl">Contatto</p>
          <Link to="tel:3401232912">
            <p>T: 3401232912</p>
          </Link>
          <Link to="mailto:info@dematechimpianti.it">
            <p>E: info@dematechimpianti.it</p>
          </Link>
        </div>
        <div className="flex flex-col w-64">
          <p className="font-bold text-xl">Sede</p>
          <p>Via del Besagliere 6</p>
          <p>37067 Valeggio sul Mincio(VR)</p>
        </div>
      </div>
      <div className="flex self-center flex-col">
        <p className={'text-xl text-center'}>
          © De Marco impianti - P.IVA: 00000000000
        </p>
      </div>
    </div>
  );
};

export default Footer;
