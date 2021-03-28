import './App.css';
import Search from './Search';
import City from './City';
import Weather from './Weather';
import Signature from './Signature';


function App() {
  return (
    <div className="App">
      <div className="container">
        <Search/>   
        <City/>
        <Weather/>
        <Signature/>
     </div>
    </div>
  );


}

export default App;
