import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const User = () => {
  const data = useContext(AuthContext);
  if (!data) throw new Error("Authcontext needs to wrapped");
  const { user, changeName } = data;
  return (
    <div>
      <h1>User</h1>
      <p>{user?.name}</p>
      <input
        onChange={(e) => changeName(e.target.value)}
        placeholder="Enter new Name"
      />
    </div>
  );
};

export default User;
