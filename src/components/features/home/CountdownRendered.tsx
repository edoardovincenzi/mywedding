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
    return <Completionist />;
  } else {
    return (
      <div
        className="flex justify-center items-center"
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
