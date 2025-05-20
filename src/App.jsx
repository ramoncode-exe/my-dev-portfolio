import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Footer from './components/Footer.jsx';
import Projects from './components/Projects.jsx';



function App(){
  return(
    <div>
      <Header />
      <section id='home'><Home /></section>
      <section id='skills'><Skills /></section>
      <section id='about'><About /></section>
      <section id='projects'><Projects /></section>
      <Footer />
    </div>
  );
}

export default App;