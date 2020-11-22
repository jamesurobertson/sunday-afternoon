import { useState } from "react";

const HooksDemo = () => {
  // useState returns an array where
  // 1st element is the slice of state
  // 2nd element is the function to updat the state
  // like class components this.state = {counter: 0, name='james'}
  // to upadte it we had invoke  this.setState({counter: this.state.counter +1})
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1> Hooks!</h1>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </>
  );
};

export default HooksDemo;
