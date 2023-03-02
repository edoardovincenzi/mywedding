import confetti from 'canvas-confetti';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  useEffect(() => {
    if (completed) {
      const confettiInterval = setInterval(() => {
        confetti({
          particleCount: 100,
          startVelocity: 30,
          spread: 360,
          origin: {
            x: Math.random(),
            y: Math.random() - 0.2,
          },
        });
      }, 1500);
      document.addEventListener('visibilitychange', (event) => {
        if (document.visibilityState !== 'visible') {
          clearInterval(confettiInterval);
        }
      });
    }
  }, [completed]);
  if (completed) {
    return (
      <div className="flex justify-center items-center pointer-events-none w-full h-[30vh]">
        <Completionist />
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center ">
        <section className="grid grid-rows-2 grid-flow-col gap-3 p-6 w-full">
          <TimeBox unitName={t('home.days')} unit={days} />
          <TimeBox unitName={t('home.minutes')} unit={minutes} />
          <TimeBox unitName={t('home.hours')} unit={hours} />
          <TimeBox unitName={t('home.seconds')} unit={seconds} />
        </section>
      </div>
    );
  }
};

export default CountdownRendered;
