import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="gradient">
      <Sidebar />
      <Header />
      <About />
      {/* <Skills /> */}
    </div>
  );
}

export default App;
