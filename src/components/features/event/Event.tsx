import { useTranslation } from 'react-i18next';
import TitleSection from '../../shared/TitleSection';
import WrapperContainer from '../../shared/WrapperContainer';
import MapEvent from './MapEvent';
import StepperEvent from './StepperEvent';

const Event = () => {
  const { t } = useTranslation();
  return (
    <WrapperContainer>
      <>
        <div className="h-[1px]"></div>
        <TitleSection id="NearMe" title={t('event.title')} />
        <MapEvent />
        <StepperEvent />
      </>
    </WrapperContainer>
  );
};

export default Event;
