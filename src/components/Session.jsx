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
            <h3>Session Time</h3>
            <div style={sessionContainer}>
                <button
                    style={buttonPlusMinusStyle}
                    disabled={isStarted}
                    onClick={decrementSessionLength}>
                    -
                </button>
                <p id="session-length">{sessionLengthInMinutes}</p>
                <button
                    style={buttonPlusMinusStyle}
                    disabled={isStarted}
                    onClick={incrementSessionLength}>
                    +
                </button>
            </div>
        </div>
    );
};

const sessionContainer = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "5px",
    alignItems: "center",
};

const buttonPlusMinusStyle = {
    border: "solid 1.5px white",
    borderRadius: "10px",
    color: "white",
    fontWeight: "bold",
    padding: "5px 10px",
    backgroundColor: "#020529",
};

export default Session;
