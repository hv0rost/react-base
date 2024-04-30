import Button from "./button/Button";

interface TabsProps {
  currentTab: string;
  onChange: (val: string) => void;
}

export default function TabsSection({ currentTab, onChange }: TabsProps) {
  return (
    <div style={{ marginBottom: "8px", marginTop: "8px" }}>
      <Button active={currentTab === "main"} onClick={() => onChange("main")}>
        main
      </Button>
      <Button
        active={currentTab === "feedback"}
        onClick={() => onChange("feedback")}
      >
        feedback
      </Button>
      <Button
        active={currentTab === "effect"}
        onClick={() => onChange("effect")}
      >
        effect
      </Button>
    </div>
  );
}
