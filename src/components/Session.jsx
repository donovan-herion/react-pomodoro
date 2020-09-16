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
            <h3 style={sessionTitle}>Session Time</h3>
            <div style={sessionContainer}>
                <button
                    style={
                        isStarted
                            ? buttonPlusMinusStyleDisabledButton
                            : buttonPlusMinusStyle
                    }
                    disabled={isStarted}
                    onClick={decrementSessionLength}>
                    -
                </button>
                <p style={sessionTimeStyle} id="session-length">
                    {sessionLengthInMinutes}
                </p>
                <button
                    style={
                        isStarted
                            ? buttonPlusMinusStyleDisabledButton
                            : buttonPlusMinusStyle
                    }
                    disabled={isStarted}
                    onClick={incrementSessionLength}>
                    +
                </button>
            </div>
        </div>
    );
};

const sessionTitle = {
    textAlign: "center",
};

const sessionContainer = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
    width: "18vw",
    alignItems: "center",
};

const sessionTimeStyle = {
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

const buttonPlusMinusStyleDisabledButton = {
    border: "solid 2px red",
    borderRadius: "15px",
    opacity: "50%",
    color: "white",
    fontWeight: "bold",
    fontSize: "1em",
    padding: "10px 20px",
    backgroundColor: "#020529",
    cursor: "not-allowed",
};

export default Session;
