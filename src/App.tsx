import Footer from './components/core/Footer';
import Navbar from './components/core/navbar/Navbar';
import Routing from './Routing';

function App() {
  return (
    <>
      <div id="portal" className="fixed z-[1003] top-0" />
      <div>
        <Navbar />
        <Routing />
        <Footer />
      </div>
    </>
  );
}

export default App;
