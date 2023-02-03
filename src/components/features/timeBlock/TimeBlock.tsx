import React from 'react';
import TitleSection from '../../shared/TitleSection';
import WrapperContainer from '../../shared/WrapperContainer';
import MapTimeBlock from './MapTimeBlock';
import StepperTimeBlock from './StepperTimeBlock';

const TimeBlock = () => {
  return (
    <WrapperContainer>
      <>
        <div className="h-[1px]"></div>
        <TitleSection id="NearMe" title="TIME BLOCK" />
        <MapTimeBlock />
        <StepperTimeBlock />
      </>
    </WrapperContainer>
  );
};

export default TimeBlock;
