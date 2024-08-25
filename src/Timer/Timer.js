// Timer.js
import React, { useState, useRef } from 'react';
import DisplayComponent from './DisplayComponent';
import BtnComponent from './BtnComponent';
import './Timer.css';

function Timer() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  const [alarmActive, setAlarmActive] = useState(false); // Alarm activation state
  const alarmRef = useRef(null); // Reference for the alarm sound

  const start = () => {
    if (!alarmActive) return; // Prevent starting the timer if the alarm is not active
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  var updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const run = () => {
    if (updatedMs === 0 && updatedS === 0 && updatedM === 0 && updatedH === 0) {
      clearInterval(interv);
      alarmRef.current.play(); // Play alarm sound
      return;
    }

    if (updatedMs === 0) {
      if (updatedS > 0) {
        updatedMs = 99;
        updatedS--;
      } else if (updatedM > 0) {
        updatedMs = 99;
        updatedS = 59;
        updatedM--;
      } else if (updatedH > 0) {
        updatedMs = 99;
        updatedS = 59;
        updatedM = 59;
        updatedH--;
      }
    } else {
      updatedMs--;
    }

    setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
    setAlarmActive(false); // Reset alarm when timer is reset
  };

  const resume = () => start();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
  };

  const handleTimeChange = (e) => {
    const { name, value } = e.target;
    setTime((prev) => ({
      ...prev,
      [name]: parseInt(value, 10),
    }));
  };

  const toggleAlarm = () => {
    setAlarmActive(!alarmActive); // Toggle alarm on/off
  };

  return (
    <div className="timerimage">
      <div className="main-section">
        <div className="clock-holder">
          <form onSubmit={handleSubmit}>
            <div className="stopwatch">
              <center>
                <h1 className="timer" style={{ marginBottom: '100px' }}>
                  Medi Timer
                </h1>
              </center>
              <DisplayComponent time={time} />
              <BtnComponent
                status={status}
                resume={resume}
                reset={reset}
                stop={stop}
                start={start}
              />
              <div className="alarm-section">
                <h3>Set Countdown Timer</h3>
                <input
                  type="number"
                  name="h"
                  value={time.h}
                  onChange={handleTimeChange}
                  placeholder="HH"
                />
                :
                <input
                  type="number"
                  name="m"
                  value={time.m}
                  onChange={handleTimeChange}
                  placeholder="MM"
                />
                :
                <input
                  type="number"
                  name="s"
                  value={time.s}
                  onChange={handleTimeChange}
                  placeholder="SS"
                />
                <div className="alarm-buttons">
                  <button type="button" onClick={toggleAlarm}>
                    {alarmActive ? 'Stop Alarm' : 'Start Alarm'}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <audio ref={alarmRef} src="/path-to-your-alarm-sound.mp3" />
    </div>
  );
}

export default Timer;
