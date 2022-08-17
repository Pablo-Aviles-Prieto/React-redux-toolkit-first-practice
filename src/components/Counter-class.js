import { Component } from 'react';
import { connect } from 'react-redux/es/exports';

import classes from './Counter.module.css';

class Counter extends Component {
  incrementHandler() {
    this.props.increment();
  }

  decrementHandler() {
    this.props.decrement();
  }

  toggleCounterHandler() {}

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          {/* With the .bind(this) we ensure that the 'this' keyword inside of the methods refers to the class. */}
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

// The 1st arg Fn maps redux state to props, which will be received in the Counter class component.
const mapStateToProps = (state) => {
  // It returns an obj where the keys will be available as props in the receiving component (in the Counter component in this case).
  return {
    counter: state.counter,
  };
};

// The 2nd arg Fn is the equivalent to useDispatch() hook.
const mapDispatchToProps = (dispatch) => {
  // We return an obj where the keys are prop names which can be used in the Counter component.
  // The value of that properties is another Fn in which we call dispatch and then set up our action.
  return {
    // This means that in the Counter component we have a prop called increment that has as value a Fn that calls dispatch with a certain action type.
    increment: () => dispatch({ type: 'increment' }),
    decrement: () => dispatch({ type: 'decrement' }),
  };
};

// We need to export with connect, and when its executed will actually return a new Fn as a value which we then execute again.
// Then, we pass our component to the returned Fn as argument.
// First executes the connect() Fn, then it returns a new Fn that is executed with our component Counter as parameter.
// connect needs 2 Fns as arg.
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
