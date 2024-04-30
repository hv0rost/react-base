import logo from "../../assets/react.svg";
import "./Header.module.css";

import { useState } from "react";
import { styled } from "styled-components";

const HeaderContainer = styled.header`
  height: 50px;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fafafa;
`;

export default function Header() {
  const [date, setDate] = useState(new Date());

  setInterval(() => setDate(new Date()), 1000);

  return (
    <HeaderContainer>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" />
        <h3 style={{ marginTop: "16px", marginLeft: "8px" }}>React course</h3>
      </div>
      <span>Time now {date.toLocaleTimeString()}</span>
    </HeaderContainer>
  );
}
