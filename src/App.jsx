import Home from './layouts/Home/Home'
import Footer from './layouts/Footer/Footer.component'
import Navbar from './layouts/Navbar/Navbar'
import './App.css'
import { CtxProvider } from './context/context';

function App() {
  return (
    <>
      <CtxProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow">
            <Home />
          </div>
          <Footer />
        </div>
      </CtxProvider>
    </>
  );
}

export default App
