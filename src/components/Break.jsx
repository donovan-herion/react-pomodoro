// eslint-disable-next-line unicorn/filename-case
import moment from "moment";
import React from "react";

const Break = ({
    breakLength,
    decrementBreakLength,
    incrementBreakLength,
    isStarted,
}) => {
    const breakLengthInMinutes = moment.duration(breakLength, "s").minutes();
    return (
        <div>
            <p id="break-label">Break Time</p>
            <p id="break-length">{breakLengthInMinutes}</p>
            <button disabled={isStarted} onClick={decrementBreakLength}>
                -
            </button>
            <button disabled={isStarted} onClick={incrementBreakLength}>
                +
            </button>
        </div>
    );
};

export default Break;
