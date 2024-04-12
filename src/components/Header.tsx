import logo from "../assets/react.svg";

const date = new Date();

export default function Header() {
  return (
    <header>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} className="App-logo" alt="logo" />
        <h3 style={{ marginTop: "16px", marginLeft: "8px" }}>React course</h3>
      </div>
      <span>Time now {date.toLocaleTimeString()}</span>
    </header>
  );
}
