import Header from "./components/Header";
import List from "./components/List";
import Button from "./components/button/Button";

import { useState } from "react";

import { ways, differences } from "./data";

export default function App() {
  const [contentKey, setContentKey] = useState<string | null>(null);

  function onClick(value: string) {
    setContentKey(value);
  }

  return (
    <>
      <Header />
      <main>
        <div>
          <h3>List below:</h3>
          <List {...ways[0]} />
          <List {...ways[1]} />
          <List {...ways[3]} />
        </div>
        <div>
          <h3>What our difference</h3>
          <Button
            onClick={() => onClick("way")}
            className={contentKey === "way" ? "active" : ""}
          >
            Button 1
          </Button>
          <Button
            onClick={() => onClick("easy")}
            className={contentKey === "easy" ? "active" : ""}
          >
            Button 2
          </Button>
          <Button
            onClick={() => onClick("program")}
            className={contentKey === "program" ? "active" : ""}
          >
            Button 3
          </Button>
          <br />
          {contentKey ? (
            <p>{differences[contentKey ?? ""]}</p>
          ) : (
            <span>Press the button</span>
          )}
        </div>
      </main>
    </>
  );
}
