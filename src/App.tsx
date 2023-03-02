import Footer from './components/core/Footer';
import Navbar from './components/core/navbar/Navbar';
import Routing from './Routing';

function App() {
  return (
    <div>
      <Navbar />
      <div id="bg" className="fixed inset-0 h-screen w-screen -z-[1]" />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
