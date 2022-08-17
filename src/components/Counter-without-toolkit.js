import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux/es/exports';

const Counter = () => {
  // This gives us back the dispatch Fn. This Fn it returns, we use it to dispatch an action to the redux store.
  const dispatch = useDispatch();

  // We get access to the data stored in the store with useSelector
  // We have to pass a Fn to be executed by react-redux. This Fn determines which piece of data we wanna extract from our store.
  // This Fn we pass, get as param the state managed by redux and then we return the part of the state we wanna extract.
  // Whenever we use useSelector, react redux will  automatically set up a subscription to the redux store to this component.
  // Thx to this subscription we talked about, the component will be updated and will receive the latest (counter in this case) automatically whenever that data change in the redux store.
  // In case this component unmount (its removed from the DOM), react redux will also clear the subscription for us.
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };

  // We are adding extra payload (the amount property) to the reducer Fn in redux.
  const increaseHandler = () => {
    dispatch({ type: 'increase', amount: 10 });
  };

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {/* {showCounter && counter} */}
      <div className={classes.value}>
      {showCounter ? counter : <p>Not counter!</p>}
      </div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
