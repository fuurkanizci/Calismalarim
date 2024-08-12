import React from "react";
import { useState, useEffect } from "react";

const Counter = () => {
  const [name, setName] = useState("Furkan");
  const toggleName = () => {
    setName((prevName) => (prevName === "Furkan" ? "Enes" : "Furkan"));
  };
  const [number, setNumber] = useState(0);
  useEffect(() => {
    console.log("Component mount edildi");
    const interval = setInterval(() => {
      setNumber((n) => n + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log("number güncellendi");
  }, [number]);
  useEffect(() => {
    console.log("name güncellendi");
  }, [name]);
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 2)}>Click</button>
      <br />
      <hr />
      <h1>{name}</h1>
      <button onClick={toggleName}>Click</button>
    </div>
  );
};

export default Counter;
