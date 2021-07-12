import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup/Signup';
import MoneyManagement from './Components/ResourcePages/MoneyManagement';
import CareerHelp from './Components/ResourcePages/CareerHelp';
import ForHsGrads from './Components/ResourcePages/ForHsGrads';
import ForKids from './Components/ResourcePages/ForKids';



function App() {
  return (
    <div className="App">
      {/* <Signup /> */}
      <MoneyManagement />
      <CareerHelp />
      {/* <ForHsGrads /> */}
      {/* <ForKids /> */}
    </div>

  );
}

export default App;
