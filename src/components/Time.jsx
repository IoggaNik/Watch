import React from 'react'

export default function Time(props) {

    let getTimeHours = props.time.hours.getHours();
    let getTimeMinutes = props.time.hours.getMinutes();
    let getTimeSeconds = props.time.hours.getSeconds();

    if (getTimeHours < 10) getTimeHours = '0' + getTimeHours;
    if (getTimeMinutes < 10) getTimeMinutes = '0' + getTimeMinutes;
    if (getTimeSeconds < 10) getTimeSeconds = '0' + getTimeSeconds;

  return (
    <div className='Time'>
        <div><p className='hours'>{getTimeHours}</p></div><p className='del'>:</p>
        <div><p className='minutes'>{getTimeMinutes}</p></div><p className="del">:</p>
        <div><p className='seconds'>{getTimeSeconds}</p></div>
    </div>
  )
}