import React from "react";
import "./EmployeeTile.scss"

const EmployeeTile = (props) =>{
return (

<div className="tile">
  <p className="tile__name">Name: {props.name}</p>
  <p className="tile__role">Role: {props.role}</p>
  <div className="tile__counter">
    <p className="tile__counter__heading">Counter</p>
    <p className="tile__counter__total">0</p>
    <p className="tile__counter__minus">-</p>
    <p className="tile__counter__plus">+</p>

  </div>
</div>
)

};

export default EmployeeTile