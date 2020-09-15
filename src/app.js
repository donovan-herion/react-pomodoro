import React, {useState, useEffect} from "react";
import Break from "./components/Break";
import Session from "./components/Session";
import TimeLeft from "./components/TimeLeft";

function App() {
    const [sessionLength, SetSessionLength] = useState(60 * 25);
    const [breakLength, SetBreakLength] = useState(300);
    const [IntervalId, setIntervalId] = useState(null);
    const [currentSessionType, setCurrentSessionType] = useState("Session"); // 'Session' or 'Break'
    const [timeLeft, setTimeLeft] = useState(sessionLength);

    useEffect(() => {
        setTimeLeft(sessionLength);
    }, [sessionLength]);

    const decrementBreakLength = () => {
        const newBreakLength = breakLength - 60;

        if (newBreakLength < 0) {
            SetBreakLength(0);
        } else {
            SetBreakLength(newBreakLength);
        }
    };

    const incrementBreakLength = () => {
        SetBreakLength(breakLength + 60);
    };

    const decrementSessionLength = () => {
        const newSessionLength = sessionLength - 60;

        if (newSessionLength < 0) {
            SetSessionLength(0);
        } else {
            SetSessionLength(newSessionLength);
        }
    };

    const incrementSessionLength = () => {
        SetSessionLength(sessionLength + 60);
    };

    const isStarted = IntervalId !== null;
    const handleStartStopClick = () => {
        if (isStarted) {
            //stop decrementation
            clearInterval(IntervalId);
            setIntervalId(null);
        } else {
            //decrement time left by one every second (1000ms)
            const newIntervalId = setInterval(() => {
                setTimeLeft((previousTimeLeft) => previousTimeLeft - 1);
            }, 30);
            setIntervalId(newIntervalId);
        }
    };

    // const handleResetButtonClick = () => {
    //     //set tout sur null
    // };

    return (
        <div className="App">
            <Break
                breakLength={breakLength}
                decrementBreakLength={decrementBreakLength}
                incrementBreakLength={incrementBreakLength}
            />
            <TimeLeft
                breakLength={breakLength}
                timerLabel={currentSessionType}
                setTimerLabel={setCurrentSessionType}
                sessionLength={sessionLength}
                handleStartStopClick={handleStartStopClick}
                startStopBtn={isStarted ? "Stop" : "Start"}
                timeLeft={timeLeft}
                setTimeLeft={setTimeLeft}
            />
            <Session
                sessionLength={sessionLength}
                decrementSessionLength={decrementSessionLength}
                incrementSessionLength={incrementSessionLength}
            />
        </div>
    );
}

export default App;
