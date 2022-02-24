import React from 'react';

function FormattedDate(props: { date: Date }) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

export default class Clock extends React.Component {
  state: { date: Date };
  timerId?: NodeJS.Timer;
  constructor(props: Object) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render(): JSX.Element {
    return (
      <div>
        <h1>State And Lifecycle</h1>
        <h2><FormattedDate date={this.state.date} /></h2>
      </div>
    );
  }
}
