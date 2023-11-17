"use client";
import { useEffect, useState } from "react";
import Button from "./button";

const Home = () => {
  const [counter, setCounter] = useState(10);
  useEffect(() => {
    console.log("home component mounted", counter);
  }, [counter]);
  console.log("rendering home");
  return (
    <div>
      <div className="flex">
        <div>Home</div>
        <div>About</div>
        <div>Contact</div>
        <div>Social</div>
        <div>Dashboard</div>
      </div>
      <div
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        This is home page {counter}
        <Button name="big button" x="2" />
      </div>
    </div>
  );
};

export default Home;
