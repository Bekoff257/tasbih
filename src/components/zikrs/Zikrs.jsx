import React, { useEffect } from 'react'
import zikr from "./Zikrs.module.scss"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Back from '../backto/Back';

function Zikrs() {
  const notify = () => toast.warning("Kechirasiz ushbu funskyia dasturlash jarayonida!");

  const [ data, setData ] = useState([])
  const [ loading, setLoading ] = useState(false)

  const zikrsData = [
    <Link>Alhamdulillah</Link>,
    <Link>SubhanAllah</Link>,
    <Link>Allohu Akbar</Link>,
    <Link>Astag'firulloh</Link>,
    <Link>La ilaha illalloh</Link>,
  ]

 useEffect((data) => {
  setLoading(true)
  setData(zikrsData)
  setLoading(false)
  console.log(zikrsData);
 }, [])


  return (
    <div>
        <ToastContainer />
        <div className={zikr.zikr}>
            <div className="container">
                <div className={zikr.back}>
                  <Back />
                  <h2>Zikrlar Soni: {zikrsData.length}</h2>
                </div>
                <div className={zikr.zikrs}>
                    {
                        loading ? <h2>Loading...</h2> :
                        zikrsData.length === 0 ? <h2 className={zikr.error_text}>Hech nima topilmadi...</h2> 
                        :
                        data.map(zikr => 
                            <p onClick={notify}>{zikr}</p>
                        )
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Zikrs