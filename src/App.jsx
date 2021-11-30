import "./App.scss";

import EmployeeTile from "./components/EmployeeTile/EmployeeTile";
import Header from "./components/Header/Header"

import team from "./data/employees";


function App() {
  return (
    <div className="App">
      <Header/>
      <EmployeeTile/>
    </div>
  );
}

export default App;
