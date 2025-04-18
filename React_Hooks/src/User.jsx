import { useAuthContext } from "./contexts/AuthContext";

const User = () => {
  const { user, changeName } = useAuthContext();
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
