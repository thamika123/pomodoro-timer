import React from "react";
import ReactDOM from "react-dom";

import ButtonGroup from "./components/ButtonGroup";
import Notification from "./components/Notification";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeLeft: 900,
            timerRunning: false,
            controlText: "Start",
            timer: "Work",
            notificationText: "",
            notificationVisible: false,
        };

        this.tick = this.tick.bind(this);
        this.controlClick = this.controlClick.bind(this);
        this.resetClick = this.resetClick.bind(this);
    }

    tick() {
        if (this.state.timeLeft) {
            this.setState(state => ({ timeLeft: state.timeLeft - 1 }));
        } else {
            this.switchTimer();
        }
    }

    componentDidUpdate() {
        document.title = `${this.formatTime()} - ${this.state.timer}`;
    }

    switchTimer() {
        if (this.state.timer === "Work") {
            this.setState({
                timeLeft: 300,
                timer: "Break",
                notificationText: "Time for a break!",
            });
        } else {
            this.setState({
                timeLeft: 900,
                timer: "Work",
                notificationText: "Back to work!",
            });
        }

        this.setState({ notificationVisible: true });
        setTimeout(() => this.setState({ notificationVisible: false }), 2000);
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

    resetClick() {
        clearInterval(this.timerID);

        if (this.state.timer === "Work") {
            this.setState({ timeLeft: 900 });
        } else {
            this.setState({ timeLeft: 300 });
        }

        this.setState({ timerRunning: false, controlText: "Start" });
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
            <div className="flex justify-center flex-col h-screen">
                {this.state.notificationVisible && (
                    <Notification text={this.state.notificationText} />
                )}
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-9xl lg:text-12xl font-black text-gray-800 dark:text-gray-100">
                        {this.formatTime()}
                    </h1>
                    <ButtonGroup
                        controlText={this.state.controlText}
                        controlClick={this.controlClick}
                        resetClick={this.resetClick}
                    />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
