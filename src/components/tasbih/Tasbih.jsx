import React from 'react'
import "./Tasbih.scss"
import { useState } from 'react'
import Back from '../backto/Back'

const Tasbih = () => {

  const [ tasbeh, setTasbeh ] = useState(0)

  function setNumber (){
    setTasbeh(tasbeh + 1)
  }

  function resetFunc(){
    setTasbeh(0)
  }

  return (
   <>
     <Back />
    <div className='tasbih'>
        <div className='ts_co'>
            <div className="ds_num" style={{color: tasbeh % 33 == 0 ? "green" : ""}}>{tasbeh}</div>
            <div className="ts_btn">
                <button className='dual' onClick={(e) => setNumber()}>Bosing</button>
                <button className='btn_reset' onClick={resetFunc}>R</button>
            </div>
        </div>
    </div>
   </>
  )
}

export default Tasbih