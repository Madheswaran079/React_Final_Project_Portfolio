import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import Top from './components/top';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Header from './components/header';
import Footer from './components/footer';
import Contact from './components/contact';
import Request from './components/request';

function App() {

  return (
    <div className="App">
      {/* <Top /> */}
      <Router>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/request" element={<Request />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;