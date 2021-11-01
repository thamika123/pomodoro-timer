import React from "react";
import ReactDOM from "react-dom";

import ButtonGroup from "./components/ButtonGroup";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeLeft: 900,
            timerRunning: false,
            controlText: "Start",
        };

        this.tick = this.tick.bind(this);
        this.controlClick = this.controlClick.bind(this);
    }

    tick() {
        if (this.state.timeLeft) {
            this.setState(state => ({ timeLeft: state.timeLeft - 1 }));
        } else {
            clearInterval(this.timerID);
        }
    }

    controlClick() {
        if (this.state.timerRunning) {
            this.setState({ timerRunning: false, controlText: "Start" });
            clearInterval(this.timerID);
        } else {
            this.setState({ timerRunning: true, controlText: "Pause" });
            this.timerID = setInterval(this.tick, 1000);
        }
    }

    formatTime() {
        let minutes = String(Math.floor(this.state.timeLeft / 60));
        let formattedMinutes = minutes.length === 2 ? minutes : `0${minutes}`;

        let seconds = String(this.state.timeLeft % 60);
        let formattedSeconds = seconds.length === 2 ? seconds : `0${seconds}`;

        return `${formattedMinutes}:${formattedSeconds}`;
    }

    render() {
        return (
            <div className="flex flex-col justify-center items-center h-screen">
                <h1 className="text-9xl lg:text-12xl font-black text-gray-800">
                    {this.formatTime()}
                </h1>
                <ButtonGroup
                    controlText={this.state.controlText}
                    controlClick={this.controlClick}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
