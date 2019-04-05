import React from "react"

export default function UserList({ users }) {
  return (
    <div>
      {users.map(user => {
        return (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <h3>{user.id}</h3>
          </div>
        )
      })}
    </div>
  )
}