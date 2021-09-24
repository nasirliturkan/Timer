import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";

const formattedTime = (sec: any) =>
  ("0" + Math.floor((sec % 3600) / 60)).slice(-2) +
  ":" +
  ("0" + (sec % 60)).slice(-2);

const TimeHeader = (props: any) => {
  const [time, setTime] = useState(0);
  const interval = useRef(0);

  const startTimer = () => {
    interval.current = window.setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(interval.current);
  };

  const resetTimer = () => {
    setTime(0);
    clearInterval(interval.current);
  };

  useEffect(() => {
    if (props.timer.isRunning) {
      startTimer();
    } else {
      stopTimer();
    }
  }, [props.timer.isRunning]);

  useEffect(() => {
    if (props.timer.reset) {
      resetTimer();
    }
  }, [props.timer.reset]);

  return <h1>{formattedTime(time)}</h1>;
};

const mapStateToTimeHeaderProps = (state: any) => {
  return {
    timer: state.timer,
  };
};
const TimeHeaderContainer = connect(mapStateToTimeHeaderProps)(TimeHeader);

export default TimeHeaderContainer;
