import './App.css'
import './styles/style.css';
import './styles/mobile.css';
import './styles/animate.css';
import './styles/super-classes.css';
import './styles/bootstrap.min.css';
import ContactForm from './components/ContactForm';
import Testimonials from './components/Testimonials';

function App() {

  return (
    <>
      <Header/>
      <Banner/>
      <Portfolio/>
      <ContactForm/>
      <Servisces/>
      <Footer/>
      <Testimonials/>
      <Skill/>
      <Blog/>
   </>
  )
}

export default App
