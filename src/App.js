import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Nav from "./components/Nav";
import Main from './components/Main/Main';
import Menu from './components/Menu';
import Footer from './components/Footer';

const App = () => {
  
  return (
    <BrowserRouter>
      <Nav />
      <Main />
      <Menu />
      <Footer />
    </BrowserRouter>
  );
};

export default App;