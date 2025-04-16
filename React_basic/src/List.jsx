import React from "react";

const List = ({ users = [] }) => {
  return (
    <div>
      {users.length > 0 ? (
        <ol>
          {users.map((user, idx) => (
            <li key={idx}>{user}</li>
          ))}
        </ol>
      ) : (
        <div>No user found</div>
      )}
    </div>
  );
};

export default List;
