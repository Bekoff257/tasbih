import React, { useEffect, useState, useLayoutEffect } from 'react';
import module from "./Main.module.scss";
import { Link } from 'react-router-dom';
import quranLogo from "../../assests/icons/quran.png";
import { BsArrowRight } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5"
import surahLogo from "../../assests/icons/surah.png";
import audiLogo from "../../assests/icons/auido.png";
import axios from 'axios';

const Main = () => {
  const [weather, setWeather] = useState(null);
  const [namazTime, setNamazTime] = useState([]);
  const [time, setTimeData] = useState("");

  const city = "Tashkent";
  const apiKey = 'e1cc92c6f6e3dbc2717cf5e89df0942c';

  const data = {
    day: new Date().getDay(),
    month: new Date().getMonth(),
    year: new Date().getFullYear()
  };

  const prayerNameMapping = {
    tong_saharlik: "Bomdod",
    quyosh: "Quyosh chiqishi",
    peshin: "Peshin",
    asr: "Asr",
    shom_iftor: "Shom",
    hufton: "Hufton"
  };

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const data = new Date();
      const hour = data.getHours();
      const minutes = data.getMinutes();
      const displayTime = `${hour}:${minutes < 10 ? '0' : ""}${minutes} `;
      setTimeData(displayTime);
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  useLayoutEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      .then(response => {
        setWeather(response.data);
        console.log(response.data);
      })
      .catch(err => console.error(err));
  }, [city, apiKey]);

  useLayoutEffect(() => {
    axios.get('https://islomapi.uz/api/present/day?region=Toshkent')
      .then(req => {
        setNamazTime(req.data);
      });
  }, []);

  return (
    <>
      <div className={module.main}>
        <div className={module.container}>
          <div className={module.times_co}>
            <div className={module.weather}>
              <h2>Ob-havo</h2>
              {weather ? (
                <div className={module.group_weather}>
                  <p>Tempratura: {weather.main.temp}°C</p>
                  <span>Namlik: {weather.main.humidity}%</span>
                </div>
              ) : (
                <p>Loading....</p>
              )}
            </div>
            <div className={module.time}>
              <h2>{time}</h2>
              <p>{data.day}/{data.month}/{data.year}</p>
            </div>
          </div>
          <div className={module.namaz_times}>
            <div className={module.main_namaztext}>
              <h2>Namoz Vaqtlari</h2>
              <p>{namazTime.region} <IoLocationSharp /></p>
            </div>
            {namazTime && namazTime.times ? (
              <ul>
                {Object.entries(namazTime.times).map(([prayerName, time]) => {
                  const modifiedPrayerName = prayerNameMapping[prayerName] || prayerName;

                  return (
                    <li key={prayerName}>
                      <span>{modifiedPrayerName}</span> <p>{time}</p>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p>Loading Namaz times...</p>
            )}
          </div>
          <div className={module.col-1}>
            <Link to="/zikrs">
              <div className={module.cardOfZikr}>
                <div className={module.img_div}>
                  <img src={quranLogo} alt="Quran_Logo" />
                </div>
                <div className={module.go_link}>
                  <h2>Zikrlar</h2>
                  <BsArrowRight className={module.arrow} />
                </div>
              </div>
            </Link>
          </div>
          <div className={module.col-1}>
            <Link to="/duolar">
              <div className={module.cardOfZikr}>
                <div className={module.img_div}>
                  <img src={surahLogo} alt="Quran_Logo" />
                </div>
                <div className={module.go_link}>
                  <h2>Duolar</h2>
                  <BsArrowRight className={module.arrow} />
                </div>
              </div>
            </Link>
          </div>
          <div className={module.col-1}>
            <Link to="/suralar">
              <div className={module.cardOfZikr}>
                <div className={module.img_div}>
                  <img src={surahLogo} alt="Quran_Logo" />
                </div>
                <div className={module.go_link}>
                  <h2>Suralar</h2>
                  <BsArrowRight className={module.arrow} />
                </div>
              </div>
            </Link>
          </div>
          <div className={module.col-1}>
            <Link to="/maruzalar">
              <div className={module.cardOfZikr}>
                <div className={module.img_div}>
                  <img src={audiLogo} alt="Quran_Logo" />
                </div>
                <div className={module.go_link}>
                  <h2>Ma'ruzalar</h2>
                  <BsArrowRight className={module.arrow} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
