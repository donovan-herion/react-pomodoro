/* eslint-disable react/button-has-type */
// eslint-disable-next-line unicorn/filename-case
import React, {useState, useEffect} from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

momentDurationFormatSetup(moment);

const TimeLeft = ({breakLength, sessionLength}) => {
    const [timeLeft, setTimeLeft] = useState(sessionLength);
    const [IntervalId, setIntervalId] = useState(null);
    const [currentSessionType, setCurrentSessionType] = useState("Session"); // 'Session' or 'Break'

    useEffect(() => {
        setTimeLeft(sessionLength);
    }, [sessionLength]);

    useEffect(() => {
        // if timeLeft is zero
        if (timeLeft === 0) {
            // play the audio
            // audioElement?.current?.play(); // optional chaining
            // change session to break or break to session
            if (currentSessionType === "Session") {
                setCurrentSessionType("Break");
                setTimeLeft(breakLength);
            } else if (currentSessionType === "Break") {
                setCurrentSessionType("Session");
                setTimeLeft(sessionLength);
            }
        }
    }, [breakLength, currentSessionType, sessionLength, timeLeft]);

    const isStarted = IntervalId !== null;
    const handleStartStopClick = () => {
        if (isStarted) {
            //stop decrementation
            clearInterval(IntervalId);
            setIntervalId(null);
        } else {
            //decrement time left by one every second (1000ms)
            const newIntervalId = setInterval(() => {
                setTimeLeft((previousTimeLeft) => {
                    return previousTimeLeft - 1;
                });
            }, 30);
            setIntervalId(newIntervalId);
        }
    };

    const formattedTimeLeft = moment
        .duration(timeLeft, "s")
        .format("mm:ss", {trim: false});

    return (
        <div>
            <p id="break-label">Time left</p>
            {formattedTimeLeft}
            <button onClick={handleStartStopClick}>
                {isStarted ? "Stop" : "Start"}
            </button>
        </div>
    );
};

export default TimeLeft;

//il faut organiser le switch entre les 2 break et session
//il faut bloquer les boutons quand isStarted est true (remonter la fonction)
//ajouter la musique
//faire le style
