import React from 'react';
import WrapperContainer from '../../shared/WrapperContainer';
import MapTimeBlock from './MapTimeBlock';
import StepperTimeBlock from './StepperTimeBlock';

const TimeBlock = () => {
  return (
    <WrapperContainer>
      <>
        <div className="h-[1px]"></div>
        <MapTimeBlock />
        <StepperTimeBlock />
      </>
    </WrapperContainer>
  );
};

export default TimeBlock;
