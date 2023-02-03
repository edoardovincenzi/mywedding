import React from 'react';
import Countdown from 'react-countdown';
import WrapperContainer from '../../shared/WrapperContainer';
import CountdownRendered from './CountdownRendered';
import confetti from 'canvas-confetti';

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
      <Countdown
        date={Date.now() + 500000}
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
    </WrapperContainer>
  );
};

export default Home;
