import { t } from 'i18next';
import { useState } from 'react';
import { Trans } from 'react-i18next';
import { BiRightArrow } from 'react-icons/bi';

const Donation = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="italic py-6 px-2">
      <button
        onClick={() => setOpen((old) => !old)}
        className="flex justify-start items-center faq-btn min-w-max text-white bg-themeColor rounded-lg"
      >
        <div className="pl-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary ">
          <BiRightArrow
            className={`transition-all duration-500 ${open ? 'rotate-90' : ''}`}
          />
        </div>
        <h4 className="text-lg font-semibold min-w-[200px]">
          {t('weddingList.titleTextLink')}
        </h4>
      </button>
      <div
        className={`faq-content mt-3 text-white bg-themeColor rounded-lg transition-all duration-500 overflow-hidden ${
          open ? 'scale-1 p-3' : 'scale-0 origin-top'
        }`}
      >
        <p
          className={`py-3 text-base leading-relaxed text-body-color transition-all duration-500 delay-500 ${
            open ? '' : 'h-0'
          }`}
        >
          <Trans
            i18nKey="weddingList.textLink"
            t={t}
            components={[<br></br>, <span className="font-bold"></span>]}
          />
        </p>
      </div>
    </div>
  );
};

export default Donation;
