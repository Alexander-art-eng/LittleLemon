import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Nav from "./components/Nav";

const App = () => {
  
  return (
    <>
    <BrowserRouter>
      <Nav />
      <Header />
    </BrowserRouter>

    </>
  );
};

export default App;