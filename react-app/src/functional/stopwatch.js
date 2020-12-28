import React, { useState } from "react";

export default function StopWatch(props) {
    const [timer, setTimer] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isStopped, setIsStopped] = useState(false);
    const [timerId, setTimerId] = useState(0);

    const formatStopWatch = () => {
        const setMiliSeconds = `0${timer % 100}`.slice(-2);
        const seconds = `${Math.floor(timer / 100)}`;
        const setSeconds = `0${seconds % 60}`.slice(-2);
        const setMinutes = `0${Math.floor(timer / 3600)}`.slice(-2);

        return `${setMinutes}: ${setSeconds}: ${setMiliSeconds}`;
    };

    const startTimer = () => {
        setIsActive(true);
        setIsStopped(true);
        const timerId = setInterval(() => {
            setTimer((timer) => timer + 1);
        }, 10);

        setTimerId(timerId);
    };

    const stopTimer = () => {
        clearInterval(timerId);
        setIsStopped(false);
    };

    const resumeTimer = () => {
        setIsStopped(true);
        const timerId = setInterval(() => {
            setTimer((timer) => timer + 1);
        }, 10);
        setTimerId(timerId);
    };

    const resetTimer = () => {
        clearInterval(timerId);
        setIsActive(false);
        setIsStopped(false);
        setTimer(0);
    };

    return (
        <div>
            <p>{formatStopWatch()}</p>
            <div>
                {!isActive && !isStopped ? (
                    <button onClick={startTimer}>Start</button>
                ) : isStopped ? (
                    <button onClick={stopTimer}>Stop</button>
                ) : (
                    <button onClick={resumeTimer}>Resume</button>
                )}
                <button onClick={resetTimer} disabled={!isActive}>
                    Reset
                </button>
            </div>
        </div>
    );
}
