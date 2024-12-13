import { useEffect, useState } from "react";
import "./App.css";
import { http } from "./utils";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    http.get<User[]>("users").then((res) => {
      console.log(res);
      setUsers(res.data);
    });
  }, []);

  return (
    <>
      <ul>
        {users.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
