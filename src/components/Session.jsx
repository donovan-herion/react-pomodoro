// eslint-disable-next-line unicorn/filename-case
import moment from "moment";
import React from "react";

const Session = ({
    sessionLength,
    decrementSessionLength,
    incrementSessionLength,
    isStarted,
}) => {
    const sessionLengthInMinutes = moment
        .duration(sessionLength, "s")
        .minutes();
    return (
        <div>
            <p id="session-label">Session Time</p>
            <p id="session-length">{sessionLengthInMinutes}</p>
            <button disabled={isStarted} onClick={decrementSessionLength}>
                -
            </button>
            <button disabled={isStarted} onClick={incrementSessionLength}>
                +
            </button>
        </div>
    );
};

export default Session;
