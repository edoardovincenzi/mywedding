import confetti from 'canvas-confetti';
import { useEffect } from 'react';
import Completionist from './Completionist';
import { TimeBox } from './CountdownRendered/TimeBox';

interface CountdownRenderedProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

const CountdownRendered = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: CountdownRenderedProps) => {
  if (completed) {
    useEffect(() => {
      setInterval(() => {
        confetti({
          particleCount: 100,
          startVelocity: 30,
          spread: 360,
          origin: {
            x: Math.random(),
            // since they fall down, start a bit higher than random
            y: Math.random() - 0.2,
          },
        });
      }, 1500);
    }, []);
    return (
      <div
        className="flex justify-center items-center pointer-events-none"
        style={{ height: 'calc(100vh - 80px)' }}
      >
        <Completionist />
      </div>
    );
  } else {
    return (
      <div
        className="flex justify-center items-center "
        style={{ height: 'calc(100vh - 80px)' }}
      >
        <section className="grid grid-rows-2 grid-flow-col gap-3 p-6 w-full">
          <TimeBox unitName="Days" unit={days} />
          <TimeBox unitName="Minutes" unit={minutes} />
          <TimeBox unitName="Hours" unit={hours} />
          <TimeBox unitName="Seconds" unit={seconds} />
        </section>
      </div>
    );
  }
};

export default CountdownRendered;
