import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div id="footer" className="flex flex-col h-64 bg-[#2B2B2B] text-white">
      <div className="flex max-sm:flex-col h-full max-sm:text-center max-sm:gap-3 max-sm:justify-start lg:justify-center lg:gap-12 my-8 w-full items-center justify-around">
        <div className="flex flex-col w-48">
          <p className="font-bold text-xl">Marian</p>
          <a href="tel:+393477041084">
            <p>+39 3477041084</p>
          </a>
          <a href="mailto:demian.m.n@gmail.com">
            <p>demian.m.n@gmail.com</p>
          </a>
        </div>
        <div className="flex flex-col w-48">
          <p className="font-bold text-xl">Ylenia</p>
          <a href="tel:+393498411410">
            <p>+39 3498411410</p>
          </a>
          <a href="mailto:ylenia.vincenzi@gmail.com">
            <p>ylenia.vincenzi@gmail.com</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
