import axios from "axios";
import React from "react";
import { useState } from "react";

export default function UserProfile() {
  const [form, setForm] = useState({
    username: "",
    avatar_url: "",
  });

  function handleChange(evt) {
    const value = evt.target.value;

    setForm({
      ...form,
      [evt.target.name]: value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    postUser(form);
  };

  const postUser = (form) => {
    axios
      .post("https://nc-marketplace-sem-2.onrender.com/api/users", form)
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <form className="userProfileForm" onSubmit={handleSubmit}>
        <label htmlFor="username">username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={form.username}
          onChange={handleChange}
          required
        ></input>
        <label htmlFor="avatar_url">Avatar url:</label>
        <input
          type="text"
          id="avatar_url"
          name="avatar_url"
          value={form.avatar_url}
          onChange={handleChange}
        ></input>
        <button>Submit</button>
      </form>
    </>
  );
}
