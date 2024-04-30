import { ChangeEvent, useState, useRef } from "react";
import Button from "./button/Button";

export default function FeedbackSection() {
  const [form, setForm] = useState({
    name: "",
    hasError: true,
    reason: "error",
  });

  // const [name, setName] = useState("");
  // const [hasError, setError] = useState(true);
  // const [reason, setReason] = useState("error");

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
    }));
    // setName(event.target.value);
  }

  function toggleError() {
    setForm((prev) => {
      return {
        ...prev,
        hasError: !prev.hasError,
      };
    });
    // setError((prev) => !prev);
  }

  function StateVsRef() {
    const input = useRef<HTMLInputElement>(null);
    const [show, setShow] = useState(false);

    function onEnterPress(event: React.KeyboardEvent<HTMLInputElement>) {
      if (event.key === "Enter") setShow(true);
    }

    return (
      <>
        <h3>Input value: {show && input.current?.value}</h3>
        <input
          ref={input}
          onKeyDown={(e) => onEnterPress(e)}
          className="control"
          type="text"
        />
      </>
    );
  }

  return (
    <>
      <h3>Feedback</h3>

      <Button onClick={toggleError}>Toggle error</Button>

      <form>
        <label htmlFor="name">Ваше имя</label>
        <input
          type="text"
          id="name"
          className="control"
          value={form.name}
          style={{ border: form.hasError ? "1px solid red" : "" }}
          onChange={(e) => handleNameChange(e)}
        />
        <label htmlFor="reason">Причина обращения</label>
        <select
          id="reason"
          className="control"
          value={form.reason}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, reason: e.target.value }))
          }
        >
          <option value="error">Error</option>
          <option value="help">Need help</option>
          <option value="other">Other</option>
        </select>

        {/* <pre>{JSON.stringify(form)}</pre> */}

        <Button disabled={form.hasError} active={!form.hasError}>
          Отправить
        </Button>
      </form>
      <hr style={{ marginTop: "16px", marginBottom: "16px" }} />

      <StateVsRef />
    </>
  );
}
