import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../utils/UserContext";
import axios from "axios";
import SingleUser from "./SingleUser";

export default function UserList() {
  const [userList, setUserList] = useState([]);

  const { setUser } = useContext(UserContext);

  useEffect(() => {
    axios
      .get("https://nc-marketplace-sem-2.onrender.com/api/users")
      .then(({ data }) => {
        setUserList(data.users);
      });
  }, []);
  return (
    <div>
      {userList.map((user) => {
        return <SingleUser key={user.username} user={user} />;
      })}
    </div>
  );
}
