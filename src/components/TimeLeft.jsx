/* eslint-disable react/button-has-type */
// eslint-disable-next-line unicorn/filename-case
import React, {useEffect} from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import audiofile from "../../audio.mp3";

momentDurationFormatSetup(moment);

const audio = new Audio(audiofile);

const TimeLeft = ({
    breakLength,
    sessionLength,
    timerLabel,
    setTimerLabel,
    timeLeft,
    setTimeLeft,
}) => {
    useEffect(() => {
        if (timeLeft === 6) {
            // play the audio
            audio.play();
        }
        // if timeLeft is zero
        if (timeLeft === 0) {
            // change session to break or break to session
            if (timerLabel === "Session") {
                setTimerLabel("Break");
                setTimeLeft(breakLength);
            } else if (timerLabel === "Break") {
                setTimerLabel("Session");
                setTimeLeft(sessionLength);
            }
        }
    }, [breakLength, timerLabel, sessionLength, timeLeft]);

    const formattedTimeLeft = moment
        .duration(timeLeft, "s")
        .format("mm:ss", {trim: false});

    return (
        <div style={timeLeftContainer}>
            <h3>{timerLabel}</h3>
            <p style={formattedTimeLeftStyle}>{formattedTimeLeft}</p>
        </div>
    );
};

const timeLeftContainer = {
    width: "20vw",
    height: "20vw",
    margin: "0 auto",
    padding: "5vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    border: "5px white solid",
    borderRadius: "50%",
};

const formattedTimeLeftStyle = {
    fontWeight: "bold",
    fontSize: "2em",
};

export default TimeLeft;

//il faut bloquer les boutons quand isStarted est true (remonter la fonction)
//ajouter la musique
//faire le style
