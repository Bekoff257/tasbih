import React, { useState, useEffect } from 'react';
import './Settings.scss';
import Back from '../backto/Back';
import back1 from './back1.jpg';
import back2 from './back2.jpg';
import back3 from './back3.jpg';

const Settings = () => {
  const [settings, setSettings] = useState(true);
  const [sizeOfText, setSizeOfText] = useState('');

  useEffect(() => {
    const backgroundImage = localStorage.getItem('backgroundImage');
    const fontSize = localStorage.getItem('fontSize');

    if (backgroundImage) {
      document.body.style.backgroundImage = backgroundImage;
    }
    if (fontSize) {
      const fontSizeValue = `${fontSize}px`;
      document.body.style.fontSize = fontSizeValue;
      setSizeOfText(fontSizeValue);
    }
  }, []);

  function changeBack(e) {
    const backgroundImage = `url(${e})`;
    document.body.style.backgroundImage = backgroundImage;
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';

    localStorage.setItem('backgroundImage', backgroundImage);
  }

  function setBackFalse() {
    if (settings) {
      document.body.style.backgroundImage = '';
      localStorage.removeItem('backgroundImage');
    } else {
      const backgroundImage = "url('/5540822.jpg')";
      document.body.style.backgroundImage = backgroundImage;
      localStorage.setItem('backgroundImage', backgroundImage);
    }
    setSettings(!settings);
  }

  function fnSizeOfText(sizeOfText) {
    const fontSizeValue = `${sizeOfText}px`;
    document.body.style.fontSize = fontSizeValue;
    setSizeOfText(fontSizeValue);
    localStorage.setItem('fontSize', sizeOfText);
  }

  return (
    <div className="container">
      <div className="back">
        <Back />
        <h2>Sozlamalar</h2>
      </div>
      <div className="settings">
        <div className="st_header">
          <div className="st_form">
            <div className='background_sz'>
              <label>Orqa fon</label>
              <input type="checkbox" id='ch' className="custom-checkbox" onChange={setBackFalse} checked={!settings} />
            </div>
            <div className='font_sz'>
              <label>Fo'nt razmeri</label>
              <select onChange={(e) => fnSizeOfText(parseInt(e.target.value))} value={parseInt(sizeOfText)}>
                <option value="12">12</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
            </div>
            <div className="select_theme">
              <label>Orqa fonni tanlang: </label>
              <div className="img_div">
                <img onClick={() => changeBack(back1)} src={back1} alt="" />
                <img onClick={() => changeBack(back2)} src={back2} alt="" />
                <img onClick={() => changeBack(back3)} src={back3} alt="" />
              </div>
            </div>
            <p className='version'>Dastur versiyasi 1.0.0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
