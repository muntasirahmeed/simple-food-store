import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Components/Header/Header';
import Foods from './Components/Foods/Foods';
import Answer from './Components/Answer/Answer';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div>
      <Header></Header>
      <Foods></Foods>
      <Answer></Answer>
      <Footer></Footer>
    </div>
  );
}

export default App;
