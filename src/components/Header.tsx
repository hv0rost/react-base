import { useState } from "react";
import logo from "../assets/react.svg";

export default function Header() {
  const [date, setDate] = useState(new Date());

  setInterval(() => setDate(new Date()), 1000);
 
  return (
    <header>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" />
        <h3 style={{ marginTop: "16px", marginLeft: "8px" }}>React course</h3>
      </div>
      <span>Time now {date.toLocaleTimeString()}</span>
    </header>
  );
}
