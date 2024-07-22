// BtnComponent.js
import React from 'react';

const BtnComponent = ({ status, resume, reset, stop, start }) => {
  return (
    <div className="btn-section">
      {(status === 0) &&
        <button className="start" onClick={start}>Start</button>
      }

      {(status === 1) &&
        <div>
          <button className="stop" onClick={stop}>Stop</button>
        </div>
      }

      {(status === 1 || status === 2) &&
        <div>
          <button className="reset" onClick={reset}>Reset</button>
        </div>
      }

      {(status === 2) &&
        <div>
          <button className="resume" onClick={resume}>Resume</button>
        </div>
      }
    </div>
  );
};

export default BtnComponent;
