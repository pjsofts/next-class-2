'use client';

import { useState } from "react";

export default function Page(){
  const [value, setValue ] = useState(0)
  console.log("rendering page1");
  return <div>
      <div>
        <button type="button" onClick={()=>setValue(value +1)} >Increase</button>
      </div>
      <h1>This is awesome  {value}</h1>
  </div>
}
