import { useState, useEffect } from "react";

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

  count++;

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `https://api.openbrewerydb.org/breweries?by_city=${city}`
        );
        if (!res.ok) throw res;

        const data = await res.json();
        setBrews(data);
      } catch (e) {
        console.log(e);
      }
    })();
    //return value from use effect will cleanup the interval.
    // otherwise the interval will never stop.
  }, [city]);

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
      <div style={{ display: "flex", flexFlow: "column" }}>
        {brews.map((brews) => {
          const { name, website_url } = brews;
          return (
            <a key={name} href={website_url}>
              {name}
            </a>
          );
        })}
      </div>
    </>
  );
};

export default HooksDemo;
