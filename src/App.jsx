import "./App.scss";

import EmployeeTile from "./components/EmployeeTile/EmployeeTile";
import Header from "./components/Header/Header"

import team from "./data/employees";


function App() {

  const employeeInfo = team.map((employee, index) => {
    return <EmployeeTile key ={index} name ={employee.name} role = {employee.role}/>
  })
  
  // .sort(function(a, b) => {
     
  //   }); 



  return (
    <div className="App">
      <Header/>
      {employeeInfo}
    </div>
  );
}

export default App;
