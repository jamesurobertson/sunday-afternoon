import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as brewStore from "../store/brews";
import Breweries from "./Breweries";

let count = 0;
const HooksDemo = () => {
  // useState returns an array where
  // 1st element is the slice of state
  // 2nd element is the function to updat the state
  // like class components this.state = {counter: 0, name='james'}
  // to upadte it we had invoke  this.setState({counter: this.state.counter +1})
  const [counter, setCounter] = useState(0);
  const [city, setCity] = useState("san diego");
  const [brews, setBrews] = useState([]);

  const dispatch = useDispatch();

  count++;

  useEffect(() => {
    //return value from use effect will cleanup the interval.
    // otherwise the interval will never stop.
    dispatch(brewStore.setBrewsThunk(city));
  }, [city, dispatch]);

  console.log(count);

  const changeHandler = (e) => {
    setCity(e.target.value);
    // never do this!!!  city = e.target.value;
  };
  return (
    <>
      <h1> Hooks!</h1>
      <h1>
        {counter} {city}
      </h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <input value={city} onChange={changeHandler} />
      <Breweries />
    </>
  );
};

export default HooksDemo;
