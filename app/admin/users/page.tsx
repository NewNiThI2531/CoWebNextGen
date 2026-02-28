"use client"

import { useState } from "react"

export default function UsersPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("WEBEDITOR")

  async function createUser() {
    const res = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, role }),
    })

    if (res.ok) {
      alert("User created")
    } else {
      alert("Error")
    }
  }

  return (
    <div className="space-y-4 max-w-md">
      <h1 className="text-2xl font-bold">Create User</h1>

      <input
        className="border p-2 w-full"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="border p-2 w-full"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <select
        className="border p-2 w-full"
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="WEBEDITOR">WEBEDITOR</option>
        <option value="HR">HR</option>
        <option value="SALE">SALE</option>
      </select>

      <button
        onClick={createUser}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Create
      </button>
    </div>
  )
}