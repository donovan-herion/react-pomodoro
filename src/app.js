import React, {useState, useEffect} from "react";
import Break from "./components/Break";
import Session from "./components/Session";
import TimeLeft from "./components/TimeLeft";
import moment from "moment";

function App() {
    const [sessionLength, setSessionLength] = useState(60 * 25);
    const [breakLength, setBreakLength] = useState(300);
    const [IntervalId, setIntervalId] = useState(null);
    const [currentSessionType, setCurrentSessionType] = useState("Session"); // 'Session' or 'Break'
    const [timeLeft, setTimeLeft] = useState(sessionLength);

    useEffect(() => {
        setTimeLeft(sessionLength);
    }, [sessionLength]);

    const formattedTitleTimeLeft = moment
        .duration(timeLeft, "s")
        .format("mm:ss", {trim: false});

    useEffect(() => {
        document.title = `${formattedTitleTimeLeft} | ${currentSessionType} - Pomodoro App`;
    }, [formattedTitleTimeLeft]);

    const decrementBreakLength = () => {
        const newBreakLength = breakLength - 60;

        if (newBreakLength < 0) {
            setBreakLength(0);
        } else {
            setBreakLength(newBreakLength);
        }
    };

    const incrementBreakLength = () => {
        setBreakLength(breakLength + 60);
    };

    const decrementSessionLength = () => {
        const newSessionLength = sessionLength - 60;

        if (newSessionLength < 0) {
            setSessionLength(0);
        } else {
            setSessionLength(newSessionLength);
        }
    };

    const incrementSessionLength = () => {
        setSessionLength(sessionLength + 60);
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
            }, 1000);
            setIntervalId(newIntervalId);
        }
    };

    const handleResetButtonClick = () => {
        clearInterval(IntervalId);
        setIntervalId(null);
        setCurrentSessionType("Session");
        setSessionLength(60 * 25);
        setBreakLength(300);
        setTimeLeft(25 * 60);
    };

    return (
        <div className="App">
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
                isStarted={isStarted}
            />
            <Break
                breakLength={breakLength}
                decrementBreakLength={decrementBreakLength}
                incrementBreakLength={incrementBreakLength}
                isStarted={isStarted}
            />
            <button onClick={handleResetButtonClick}>Reset</button>
        </div>
    );
}

export default App;
