/* eslint-disable react/prop-types */
import React from "react";
import Button from "./Button";

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

  handleClick = () => {
    this.setState({
      locale: "en-US",
    });
  };

  render() {
    const { date, locale } = this.state;
    return (
      <h1 className="heading">
        <span className="text">{date.toLocaleTimeString(locale)}</span>
        {/* to send parameter you have to wrap it */}
        {/* <button type="submit" onClick={() => this.handleClick(parameter)}> */}
        {locale === "bn-BD" ? (
          <Button change={this.handleClick}
           locale="en-US">
            Click me
          </Button>
        ) : (
          <Button change={this.handleClick}
           locale="bn-BD">
            Click me
          </Button>
        )}
      </h1>
    );
  }
}

export default Clock;
