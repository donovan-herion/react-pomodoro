import React, {useState} from "react";
import Break from "./components/Break";
import Session from "./components/Session";
import TimeLeft from "./components/TimeLeft";

function App() {
    const [breakLength, SetBreakLength] = useState(300);

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

    const [sessionLength, SetSessionLength] = useState(60 * 25);

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
    return (
        <div className="App">
            <Break
                breakLength={breakLength}
                decrementBreakLength={decrementBreakLength}
                incrementBreakLength={incrementBreakLength}
            />
            <TimeLeft breakLength={breakLength} sessionLength={sessionLength} />
            <Session
                sessionLength={sessionLength}
                decrementSessionLength={decrementSessionLength}
                incrementSessionLength={incrementSessionLength}
            />
        </div>
    );
}

export default App;
