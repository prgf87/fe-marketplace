import React from "react";

export default function SingleUser({ user }) {
  return (
    <div>
      <h1>Username: {user.username}</h1>
      <p>Kudos: {user.kudos}</p>
      <img
        src={user.avatar_url}
        alt={`${user.username} profile avatar picture`}
      />
    </div>
  );
}
