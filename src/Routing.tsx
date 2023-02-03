import { Navigate, Route, Routes } from 'react-router-dom';
import About from './components/features/about/About';
import Home from './components/features/home/Home';
import NearMe from './components/features/nearMe/NearMe';
import TimeBlock from './components/features/timeBlock/TimeBlock';

const Routing = () => {
  return (
    <Routes>
      <Route path={`/`} element={<Home />} />
      <Route path={`/time-block`} element={<TimeBlock />} />
      <Route path={`/about`} element={<About />} />
      <Route path={`/near-me`} element={<NearMe />} />
      <Route path="*" element={<Navigate replace to={`/`} />} />
    </Routes>
  );
};

export default Routing;
