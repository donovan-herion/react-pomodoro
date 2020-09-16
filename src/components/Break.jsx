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
            <h3 style={breakTitle}>Break Time</h3>
            <div style={breakContainer}>
                <button
                    style={buttonPlusMinusStyle}
                    disabled={isStarted}
                    onClick={decrementBreakLength}>
                    -
                </button>
                <p style={breakTimeStyle} id="break-length">
                    {breakLengthInMinutes}
                </p>
                <button
                    style={buttonPlusMinusStyle}
                    disabled={isStarted}
                    onClick={incrementBreakLength}>
                    +
                </button>
            </div>
        </div>
    );
};

const breakTitle = {
    textAlign: "center",
};

const breakContainer = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
    width: "18vw",
    alignItems: "center",
};

const breakTimeStyle = {
    backgroundColor: "white",
    width: "90px",
    height: "90px",
    textAlign: "center",
    padding: "27px 0",
    borderRadius: "50%",
    color: "black",
};

const buttonPlusMinusStyle = {
    border: "solid 2px white",
    borderRadius: "15px",
    color: "white",
    fontWeight: "bold",
    fontSize: "1em",
    padding: "10px 20px",
    backgroundColor: "#020529",
};

export default Break;
