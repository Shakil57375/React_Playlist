/* eslint-disable react/prop-types */
import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), locale: "bn-BD" };
  }

  componentDidMount() {
    this.clockTimer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      locale: "en-US",
    });
  }

  render() {
    const { date, locale } = this.state;
    return (
      <h1 className="heading">
        <span className="text">{date.toLocaleTimeString(locale)}</span>
        <button type="submit" onClick={this.handleClick}>
          Click me
        </button>
      </h1>
    );
  }
}

export default Clock;
