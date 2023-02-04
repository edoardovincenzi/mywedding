import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div id="footer" className="flex flex-col h-64 bg-[#2B2B2B] text-white">
      <div className="flex max-sm:flex-col h-full max-sm:text-center max-sm:gap-3 max-sm:justify-start lg:justify-center lg:gap-12 my-8 w-full items-center justify-around">
        <div className="flex flex-col w-40">
          <p className="font-bold text-xl">Marian</p>
          <Link to="tel:3333333332">
            <p>T: 3333333332</p>
          </Link>
          <Link to="mailto:marian@gmail.com">
            <p>E: marian@gmail.com</p>
          </Link>
        </div>
        <div className="flex flex-col w-40">
          <p className="font-bold text-xl">Ylenia</p>
          <Link to="tel:3333333332">
            <p>T: 3333333332</p>
          </Link>
          <Link to="mailto:ylenia@gmail.com">
            <p>E: ylenia@gmail.com</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
