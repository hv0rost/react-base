import { useEffect, useState, useCallback } from "react"
import Button from "./button/Button"
import Modal from "./modal/Modal"
import useInput from "../hooks/useInput"

interface User {
  id: number
  name: string
}

export default function EffectSection() {
  const input = useInput("")
  function openDialog(isOpen: boolean) {
    setDialogOpen(isOpen)
  }

  const [isDialogOpen, setDialogOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState<Array<User>>([])

  const fetchUsers = useCallback(async () => {
    setLoading(true)
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    setUsers(data)
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  return (
    <>
      <h3>Effects:</h3>

      <Button onClick={() => openDialog(true)}>Open window</Button>

      <Modal open={isDialogOpen}>
        <h3>Hello from modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
          accusamus maxime iure nisi totam nam molestiae ipsum asperiores
          commodi nesciunt? Exercitationem at consectetur sit alias.
        </p>
        <Button onClick={() => openDialog(false)}>Close window</Button>
      </Modal>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <input
            type="text"
            placeholder="Filter"
            className="control"
            style={{ marginTop: "16px" }}
            {...input}
          />
          <ul style={{ marginTop: "16px" }}>
            {users
              .filter((user) => user.name.toLowerCase().includes(input.value))
              .map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
          </ul>
        </>
      )}
    </>
  )
}
