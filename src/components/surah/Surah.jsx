import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Surah.scss"
import Back from '../backto/Back';

function Surah() {
  const [dataAudio, setDataAudio] = useState([]);

  useEffect(() => {
    axios.get('https://quran-api-id.vercel.app/surahs')
      .then(res => {
        setDataAudio(res.data)
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
        <div className="back"><Back /></div>
        <div className='surah_container'>
            <div className='surah_length'>
                <h1>Suralar</h1>
                <span>suralar soni: {dataAudio.length}</span>
            </div>
        {dataAudio.map(item => (
        <div className='audio_list' key={item.identifier}>
                <div className='audio_item'>
                    <p>{item.name}</p>
                    <audio src={item.audio} controls></audio>
                </div>
        </div>
        ))}
        </div>
    </>
  );
}

export default Surah;
