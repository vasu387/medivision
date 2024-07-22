// Timer.js
import React, { useState } from 'react';
import DisplayComponent from './DisplayComponent';
import BtnComponent from './BtnComponent';
import './Timer.css';

function Timer() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  // Not started = 0
  // started = 1
  // stopped = 2

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  var updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };

  const resume = () => start();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    // Handle form submission if needed
  };

  return (
    <div className="timerimage" >
    <div className="main-section" >
      <div className="clock-holder" >
        <form onSubmit={handleSubmit}>
          <div className="stopwatch">
        <center><h1 className='timer' style={{marginBottom:"100px"}}>Medi Timer</h1></center>
            <DisplayComponent time={time} />
            <BtnComponent
              status={status}
              resume={resume}
              reset={reset}
              stop={stop}
              start={start}
            />
          </div>
        </form>
      </div>
      </div>
    </div>
  );
}

export default Timer;
