import { differences } from "../data";
import Button from "../components/button/Button";

import { useState } from "react";

export default function DifferencesSection() {
  const [contentKey, setContentKey] = useState<string | null>(null);

  function onClick(value: string) {
    setContentKey(value);
  }

  return (
    <>
      <h3>What our difference</h3>
      <Button onClick={() => onClick("way")} active={contentKey === "way"}>
        Button 1
      </Button>
      <Button onClick={() => onClick("easy")} active={contentKey === "easy"}>
        Button 2
      </Button>
      <Button
        onClick={() => onClick("program")}
        active={contentKey === "program"}
      >
        Button 3
      </Button>
      <br />
      {contentKey ? (
        <p>{differences[contentKey ?? ""]}</p>
      ) : (
        <span>Press the button</span>
      )}
    </>
  );
}
