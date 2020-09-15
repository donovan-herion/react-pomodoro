// eslint-disable-next-line unicorn/filename-case
import moment from "moment";
import React from "react";

const Break = ({
    breakLength = {breakLength},
    decrementBreakLength = {decrementBreakLength},
    incrementBreakLength = {incrementBreakLength},
}) => {
    const breakLengthInMinutes = moment.duration(breakLength, "s").minutes();
    return (
        <div>
            <p id="break-label">Break</p>
            <p id="break-length">{breakLengthInMinutes}</p>
            <button onClick={decrementBreakLength}>-</button>
            <button onClick={incrementBreakLength}>+</button>
        </div>
    );
};

export default Break;
