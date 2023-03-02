import React from 'react';
import Countdown from 'react-countdown';
import WrapperContainer from '../../shared/WrapperContainer';
import CountdownRendered from './CountdownRendered';
import confetti from 'canvas-confetti';
import Firm from '../../../assets/Firm';

const Home = () => {
  return (
    <WrapperContainer
      onClickFn={() =>
        confetti({
          particleCount: 100,
          startVelocity: 30,
          spread: 360,
          origin: {
            x: Math.random(),
            // since they fall down, start a bit higher than random
            y: Math.random() - 0.2,
          },
        })
      }
    >
      <div
        className="flex flex-col items-center justify-center h-full w-[full]"
        style={{ minHeight: 'calc(100vh - 80px)' }}
      >
        <div className="w-[80%] flex flex-col justify-center items-center">
          <Firm />
          <Countdown
            date={1685196000000}
            renderer={(renderer) => (
              <CountdownRendered
                completed={renderer.completed}
                hours={renderer.hours}
                minutes={renderer.minutes}
                seconds={renderer.seconds}
                days={renderer.days}
              />
            )}
          />
        </div>
      </div>
    </WrapperContainer>
  );
};

export default Home;
