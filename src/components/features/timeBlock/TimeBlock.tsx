import { useTranslation } from 'react-i18next';
import TitleSection from '../../shared/TitleSection';
import WrapperContainer from '../../shared/WrapperContainer';
import MapTimeBlock from './MapTimeBlock';
import StepperTimeBlock from './StepperTimeBlock';

const TimeBlock = () => {
  const { t } = useTranslation();
  return (
    <WrapperContainer>
      <>
        <div className="h-[1px]"></div>
        <TitleSection id="NearMe" title={t('navBar.timeBlock')} />
        <MapTimeBlock />
        <StepperTimeBlock />
      </>
    </WrapperContainer>
  );
};

export default TimeBlock;
