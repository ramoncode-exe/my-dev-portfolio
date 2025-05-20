import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Datas from './components/Datas.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Footer from './components/Footer.jsx';



function App(){
  return(
    <div>
      <Header />
      <Home />
      <Skills />
      <Datas />
      <About />
      <Footer />
    </div>
  );
}

export default App;