'use client';

import { useEffect, useState, useCallback } from 'react';

interface TimerProps {
  initialSeconds: number;
  onTimeUp: () => void;
  isRunning: boolean;
}

export default function Timer({ initialSeconds, onTimeUp, isRunning }: TimerProps) {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, onTimeUp]);

  const formatTime = useCallback((totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }, []);

  const getTimerClass = () => {
    if (seconds <= 300) return 'timer-danger'; // 5 minutes
    if (seconds <= 600) return 'timer-warning'; // 10 minutes
    if (seconds <= 1800) return 'timer-caution'; // 30 minutes
    return 'timer-normal';
  };

  const percentage = (seconds / initialSeconds) * 100;

  return (
    <div className={`timer-container ${getTimerClass()}`}>
      <div className="timer-display">
        <svg className="timer-ring" viewBox="0 0 36 36">
          <path
            className="timer-ring-bg"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="timer-ring-progress"
            strokeDasharray={`${percentage}, 100`}
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <div className="timer-text">
          <span className="timer-time">{formatTime(seconds)}</span>
          <span className="timer-label">Time Remaining</span>
        </div>
      </div>
      {seconds <= 300 && (
        <div className="timer-warning-text">
          ⚠️ Less than 5 minutes remaining!
        </div>
      )}
    </div>
  );
}
