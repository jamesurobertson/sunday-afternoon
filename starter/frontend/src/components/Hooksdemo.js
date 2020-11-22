import { useState, useEffect } from "react";

let count = 0;
const HooksDemo = () => {
  // useState returns an array where
  // 1st element is the slice of state
  // 2nd element is the function to updat the state
  // like class components this.state = {counter: 0, name='james'}
  // to upadte it we had invoke  this.setState({counter: this.state.counter +1})
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("james");

  count++;

  useEffect(() => {
    console.log("useEffect invoked");
  }, [counter]);

  console.log(count);

  const changeHandler = (e) => {
    setName(e.target.value);
    // never do this!!!  name = e.target.value;
  };
  return (
    <>
      <h1> Hooks!</h1>
      <h1>
        {counter} {name}
      </h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <input value={name} onChange={changeHandler} />
    </>
  );
};

export default HooksDemo;
