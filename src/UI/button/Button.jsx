import React from "react";
import "./Button.css"

const Button = (props) => {
  return (
    <button className='btn' onClick={props.onClick} style={{marginRight:props.marginRight}}>{props.children}{props.title}</button>
  )
};

export default Button;