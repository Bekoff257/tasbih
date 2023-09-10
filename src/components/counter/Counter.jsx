import React from 'react';
import "./Counter.scss"
import { Link } from 'react-router-dom';
import taslogo from "../../assests/icons/tasbeh.png"
import { useLocation } from 'react-router-dom';

function Counter() {
  const locf = useLocation()

  return (
    <div className='counter' style={{display: locf.pathname.includes('tasbeh') ? "none" : ""}}>
      <Link to="/tasbeh"><img src={taslogo} alt="TasbehLogo" /></Link>
    </div>
  );
}

export default Counter;
