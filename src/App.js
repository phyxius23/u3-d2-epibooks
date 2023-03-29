/* The following line can be included in your src/index.js or App.js file */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AllTheBooks from './components/AllTheBooks';
import MyFooter from './components/MyFooter';
import MyNav from './components/MyNav';
import Welcome from './components/Welcome';

function App() {
  return (
    <>
      <MyNav brand="EpiBooks"/>
      <Welcome />
      <AllTheBooks />
      <MyFooter brand="EpiBooks" />
    </>
  );
}

export default App;
