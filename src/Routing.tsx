import { Navigate, Route, Routes } from 'react-router-dom';
import About from './components/features/about/About';
import Home from './components/features/home/Home';
import NearMe from './components/features/nearMe/NearMe';
import Event from './components/features/event/Event';

const Routing = () => {
  return (
    <Routes>
      <Route path={`/`} element={<Home />} />
      <Route path={`/event`} element={<Event />} />
      <Route path={`/about`} element={<About />} />
      <Route path={`/near-me`} element={<NearMe />} />
      <Route path="*" element={<Navigate replace to={`/`} />} />
    </Routes>
  );
};

export default Routing;
