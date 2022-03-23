import logo from './logo.svg';
import './App.css';
import EmployeeList from "./Pages/EmployeeList";
import CreateEmployee from "./Pages/CreateEmployee";

function App() {

  return (
    <div className="App">
    <CreateEmployee/>
    <EmployeeList/>
    </div>
  );
}

export default App;
