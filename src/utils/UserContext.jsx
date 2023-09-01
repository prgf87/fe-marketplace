import { createContext, useState } from "react";

const defaultUsers = {
  users: [
    { username: "Pedro", avatar_url: "sdgsg", kudos: 0 },
    { username: "George", avatar_url: "sdfgrghe", kudos: 0 },
  ],
};

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(defaultUsers);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
