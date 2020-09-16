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
            <h3>Break Time</h3>
            <div style={breakContainer}>
                <button disabled={isStarted} onClick={decrementBreakLength}>
                    -
                </button>
                <p id="break-length">{breakLengthInMinutes}</p>
                <button disabled={isStarted} onClick={incrementBreakLength}>
                    +
                </button>
            </div>
        </div>
    );
};

const breakContainer = {
    display: "flex",
    justifyContent: "space-between",
};

export default Break;
