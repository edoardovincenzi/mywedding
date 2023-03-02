import { t } from 'i18next';
import { useState } from 'react';
import { Trans } from 'react-i18next';
import { BiRightArrow } from 'react-icons/bi';

const Donation = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white/90 italic pt-6 px-2 rounded-lg">
      <button
        onClick={() => setOpen((old) => !old)}
        className="flex justify-start items-center faq-btn min-w-max text-white bg-themeColor rounded-lg"
      >
        <div className="pl-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary ">
          <BiRightArrow
            className={`transition-all duration-500 ${open ? '' : 'rotate-90'}`}
          />
        </div>
        <h4 className="text-lg font-semibold min-w-[200px]">
          {t('weddingList.titleTextLink')}
        </h4>
      </button>
      <div
        className={`faq-content mt-3 text-white bg-themeColor rounded-lg transition-all duration-500 ${
          open ? 'h-[330px] p-3' : 'h-0'
        }`}
      >
        <p className="py-3 text-base leading-relaxed text-body-color">
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
