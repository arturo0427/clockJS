import { useEffect } from "react";
import "./Clock.css";


export const Clock = () => {

  const seconds = () => {
    const time = new Date();

    const second = time.getSeconds();
    const secondsDegrees = ((second / 60) * 360) + 90;
    const handSecond = document.querySelector(".hand-seconds");
    handSecond.style.transform = `rotate(${secondsDegrees}deg)`;


    const minutes = time.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    const handMinutes = document.querySelector(".hand-minutes");
    handMinutes.style.transform = `rotate(${minutesDegrees}deg)`;


    const hour = time.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((minutes / 60) * 30) + 90;
    const handHours = document.querySelector(".hand-hours");
    handHours.style.transform = `rotate(${hourDegrees}deg)`;
  }




  useEffect(() => {
    setInterval(() => {
      seconds();

    }, [1000])
  }, [])



  return (
    <div className="clock-face">
      <div className="hand hand-seconds"></div>
      <div className="hand hand-minutes"></div>
      <div className="hand hand-hours"></div>
    </div>
  );
};
