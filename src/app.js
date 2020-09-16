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

        if (newBreakLength < 60) {
            setBreakLength(60);
        } else {
            setBreakLength(newBreakLength);
        }
    };

    const incrementBreakLength = () => {
        if (breakLength >= 60 * 59) {
            setBreakLength(60 * 59);
        } else {
            setBreakLength(breakLength + 60);
        }
    };

    const decrementSessionLength = () => {
        const newSessionLength = sessionLength - 60;

        if (newSessionLength < 60) {
            setSessionLength(60);
        } else {
            setSessionLength(newSessionLength);
        }
    };

    const incrementSessionLength = () => {
        if (sessionLength >= 60 * 59) {
            setSessionLength(60 * 59);
        } else {
            setSessionLength(sessionLength + 60);
        }
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
        <div style={containerStyle} className="App">
            <h1 style={TitleStyle}>Pomodoro</h1>
            <div style={sessionBreakContainer}>
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
            </div>
            <TimeLeft
                breakLength={breakLength}
                timerLabel={currentSessionType}
                setTimerLabel={setCurrentSessionType}
                sessionLength={sessionLength}
                timeLeft={timeLeft}
                setTimeLeft={setTimeLeft}
            />
            <div style={buttonContainerStyle}>
                <button
                    style={buttonStartResetStyle}
                    onClick={handleStartStopClick}>
                    {isStarted ? "Stop" : "Start"}
                </button>
                <button
                    style={buttonStartResetStyle}
                    onClick={handleResetButtonClick}>
                    Reset
                </button>
            </div>
        </div>
    );
}

document.querySelector("body").style.backgroundColor = "#020529";

const containerStyle = {
    color: "white",
    fontSize: "2em",
};

const sessionBreakContainer = {
    display: "flex",
    justifyContent: "space-around",
};

const TitleStyle = {
    textAlign: "center",
    margin: "5vh 0 2vh",
};

const buttonContainerStyle = {
    width: "20vw",
    margin: "7vh auto 0",
    display: "flex",
    justifyContent: "space-between",
};

const buttonStartResetStyle = {
    border: "solid 2px white",
    borderRadius: "10px",
    width: "130px",
    color: "white",
    fontWeight: "bold",
    fontSize: "1em",
    padding: "10px",
    backgroundColor: "#020529",
};

export default App;
