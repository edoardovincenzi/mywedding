import { GiCastle } from 'react-icons/gi';
import { MdOutlineFoodBank } from 'react-icons/md';
import { GiPartyPopper } from 'react-icons/gi';
import Step from './Step';
import { useTranslation } from 'react-i18next';

const StepperEvent = () => {
  const { t } = useTranslation();
  return (
    <ol className="relative text-gray-500 border-l border-gray-200 m-11 bg-white/90 rounded-lg">
      <Step
        title={t('event.cerimony')}
        when={t('event.whenCerimony')}
        where={
          <a
            className="cursor-pointer"
            href="https://goo.gl/maps/5EBJj5aKRVi9vN5F7"
            target="_blank"
          >
            {t('event.whereCerimony')}
          </a>
        }
        description={t('event.descriptionCerimony')}
        Icon={GiCastle}
      />

      <Step
        title={t('event.receipt')}
        when={t('event.whenReceipt')}
        where={
          <a
            className="cursor-pointer"
            href="https://goo.gl/maps/ryMi8jHG5YK3KEzw5"
            target="_blank"
          >
            {t('event.whereReceipt')}
          </a>
        }
        description={t('event.descriptionReceipt')}
        Icon={MdOutlineFoodBank}
      />
      <Step
        title={t('event.party')}
        when={t('event.whenParty')}
        where={
          <a href="https://goo.gl/maps/ryMi8jHG5YK3KEzw5">
            {t('event.whereParty')}
          </a>
        }
        description={t('event.descrptionParty')}
        Icon={GiPartyPopper}
      />
    </ol>
  );
};

export default StepperEvent;
