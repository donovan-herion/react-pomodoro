// eslint-disable-next-line unicorn/filename-case
import moment from "moment";
import React from "react";

const Session = ({
    sessionLength = {sessionLength},
    decrementSessionLength = {decrementSessionLength},
    incrementSessionLength = {incrementSessionLength},
}) => {
    const sessionLengthInMinutes = moment
        .duration(sessionLength, "s")
        .minutes();
    return (
        <div>
            <p id="session-label">Session</p>
            <p id="session-length">{sessionLengthInMinutes}</p>
            <button onClick={decrementSessionLength}>-</button>
            <button onClick={incrementSessionLength}>+</button>
        </div>
    );
};

export default Session;
