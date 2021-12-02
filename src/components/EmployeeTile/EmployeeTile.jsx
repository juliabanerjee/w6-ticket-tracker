import React, { useState } from "react";
import "./EmployeeTile.scss"

const EmployeeTile = (props) => {

const {name, role, employeeArr} = props

const [counter, setCounter] = useState(0);

const handleIncrement = () => {
  setCounter(counter + 1)
};

const handleDecrement = () => {
  setCounter(counter - 1)
};


  return (
<>
<div className="tile">
  <p>{name}</p>
  <p>{role} </p>
  
  <div className="tile__counter">
    <p className="tile__counter__heading">Counter</p>
    <p className="tile__counter__total">{counter}</p>
    <p onClick = {handleDecrement} className="tile__counter__minus">-</p>
    <p onClick = {handleIncrement} className="tile__counter__plus">+</p>

  </div>
</div>
</>
)

};

export default EmployeeTile