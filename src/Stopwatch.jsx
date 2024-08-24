import React, { useState, useEffect, useRef } from 'react';
import './Stopwatch.css';

const Stopwatch = () => {
  const [time, setTime] = useState(0); // Time in seconds
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Handle timer start/stop with interval
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    // Cleanup interval on component unmount
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  // Convert seconds to HH:MM:SS format
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="stopwatch">
        <h1 style={{color:'red'}}>Digital Ratha</h1>
        <h2>Assignment-2</h2>
        
      <div className="display">{formatTime(time)}</div>
      <div className="controls">
        <button style={{backgroundColor:'green'}} onClick={handleStart} disabled={isRunning}>Start</button>
        <button style={{backgroundColor:'red'}} onClick={handlePause} disabled={!isRunning}>Pause</button>
        <button style={{backgroundColor:'goldenrod'}} onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
