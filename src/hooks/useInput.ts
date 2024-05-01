import { ChangeEvent, useState } from "react"

export default function useInput(defaultValue: string = "") {
  const [value, setValue] = useState(defaultValue)

  return {
    value,
    onChange: (event: ChangeEvent<HTMLInputElement>) =>
      setValue(event.target.value),
  }
}
