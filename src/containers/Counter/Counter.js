import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {
  increment,
  decrement,
  incrementBy5,
  decrementBy5,
  storeResult,
  deleteResult,
} from '../../store/actions/index';

class Counter extends Component {
  state = {
    counter: 0,
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case 'inc':
        this.setState((prevState) => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case 'dec':
        this.setState((prevState) => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case 'add':
        this.setState((prevState) => {
          return { counter: prevState.counter + value };
        });
        break;
      case 'sub':
        this.setState((prevState) => {
          return { counter: prevState.counter - value };
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.counter} />
        <CounterControl label='Increment' clicked={this.props.onIncrement} />
        <CounterControl label='Decrement' clicked={this.props.onDecrement} />
        <CounterControl label='Add 5' clicked={this.props.incrementBy5} />
        <CounterControl label='Subtract 5' clicked={this.props.decrementBy5} />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.counter)}>
          Store Result
        </button>
        <ul>
          {this.props.results.map((result) => (
            <li
              style={{ cursor: 'pointer' }}
              key={result.id}
              onClick={() => this.props.onDeleteResult(result.id)}
            >
              {result.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counterReducer.counter,
  results: state.resultReducer.results,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch(increment()),
  onDecrement: () => dispatch(decrement()),
  incrementBy5: () => dispatch(incrementBy5(5)),
  decrementBy5: () => dispatch(decrementBy5(5)),
  onStoreResult: (counter) => dispatch(storeResult(counter)),
  onDeleteResult: (resultId) => dispatch(deleteResult(resultId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
