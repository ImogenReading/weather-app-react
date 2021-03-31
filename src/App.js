import './App.css';
import Weather from './Weather';
import Signature from './Signature';


function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York"/>
        <Signature/>
     </div>
    </div>
  );


}

export default App;
